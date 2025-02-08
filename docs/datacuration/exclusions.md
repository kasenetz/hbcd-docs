# Exclusion Criteria 

## Imaging: Acquisition Parameter Criteria
Following conversion to BIDS format, the MRI NIfTI and JSON files undergo additional checks to ensure data integrity. All images are verified to be acquired using a head coil before inclusion in the BIDS dataset. Modality-specific inclusion criteria, parsed from the image JSON files, are as follows:

<div id="acq-param-table" class="table-banner" onclick="toggleCollapse(this)">
  <span class="table-text">Acquisition Parameter Ranges for Data Release Eligibility</span>
  <span class="arrow">▸</span>
</div>
<div class="table-open-collapsible-content">
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">File</th>
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">TR</th>   
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">TE</th>        
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">TI</th>    
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">Slice Thickness</th>  
      <th style="width: 100%; border-collapse: collapse; table-layout: fixed;">Volume #</th>  
    </tr>
  </thead>
<tbody>
	<tr>
		<td>T1w</td>
		<td>2.3-2.41</td>
    <td>0.002-0.0035</td>
		<td>1.06-1.1</td>    
    <td>0.8</td>    
    <td>NA</td>    
	</tr>
	<tr>
		<td>T2w</td>
		<td>2.5-4.5</td>
    <td>0.09-0.15</td>
		<td>0.29-0.33</td>    
    <td>0.563-0.565</td>    
    <td>NA</td>
	</tr>  
	<tr>
		<td>MRS Localizer</td>
		<td>2.5-4.5</td>
    <td>0.09-0.15</td>
		<td>0.29-0.33</td>    
    <td>0.563-0.565</td>    
    <td>NA</td>
	</tr>   
	<tr>
		<td>Diffusion</td>
		<td>4.8</td>
    <td>0.0880-0.0980</td>
		<td>NA</td>    
    <td>1.7</td>    
    <td style="word-wrap: break-word; white-space: normal;">≥ 90 (AP + PA)</td>  
	</tr>  
	<tr>
		<td>EPI Fieldmap</td>
		<td>8.4-9.2</td>
    <td>0.064-0.0661</td>
		<td>2</td>    
    <td>0.563-0.565</td>    
    <td>NA</td>
	</tr>  
	<tr>
		<td>Functional</td>
		<td>1.725</td>
    <td>0.0369-0.0371</td>
		<td>NA</td>    
    <td>2</td>  
    <td>≥ 87 (~2.5 min)</td>   
	</tr>  
</tbody>
</table>
</div>


## Quality Control Criteria
#### Imaging Data
For imaging data, only files that pass [raw data quality control](../measures/mri/qc.md#raw-mr-data-qc) are included in the data release and utilized for data processing. All quality control information is stored in the `sub-<label>_ses-<label>_scans.tsv` file located in each BIDS session folder. Some modalities undergo additional, more stringent QC filtering based on additional QC metrics to select only the best data for processing - see [Processing Pipeline Criteria](#processing-pipeline-criteria) below for details.

#### Electroencephalography
EEG file inclusion in the data release is based in part on EEG capping quality: acquisitions with QC ratings of "excellent", "average", and "poor" are all included and those rated as "not usable" are excluded. See details of quality control procedures under [Data Measures > EEG > EEG Net Placement ("Capping Quality") Ratings](../measures/eeg/index.md#eeg-net-placement-capping-quality-ratings). Capping ratings are made available to users in the QC instrument files provided for each EEG task under `phenotype/` (`eeg_qc_task-FACE.tsv`, `eeg_qc_task-MMN.tsv`, `eeg_qc_task-RS.tsv`, and `eeg_qc_task-VEP.tsv` - see details [here](phenotypes.md#instrument-data)).

## Processing Pipeline Criteria
**File Selection for the First Release**    
With the exception of TB1 MRI and electrocardiogram (ECG) data, raw BIDS files are included in the release only if they were used in at least one processing pipeline, ensuring alignment with derived pipeline outputs. Since HBCD employs multiple pipelines — each with its own requirements — the released data represent the union of all files that meet at least one pipeline’s criteria. Pipeline-specific criteria are detailed under *Quality Control Selection Information* in the [Tool Names](https://hbcd-cbrain-processing.readthedocs.io/latest/tool_details.html#tool-names) section of the HBCD Processing website.

**QC Criteria**    
At a minimum, processing requires specific file types, excluding data that failed QC (see [Quality Control Criteria](#quality-control-criteria) above). When additional QC criteria apply, filtering typically occurs in two stages: first, using both manual and automated QC fields, and second, using only automated fields. For example, only the highest-quality T1w and T2w are selected for structural MRI processing when multiple scans passing QC are present. In this first release, all high-resolution T1w and T2w scans — and most QALAS acquisitions — were selected using `QU_Motion`, a manual assessment of motion artifacts.

**Non-QC Criteria**   
Some pipeline criteria are unrelated to QC, particularly for modalities without available raw data QC metrics (e.g., motion/accelerometry). For instance, file selection for magnetic resonance spectroscopy (MRS) anatomical localizers is based on the timing of acquisition, which is more critical than image quality.

## Tabulated Instrument Data
Below is a list of general rules applied to all data as well as static (i.e. precisely identified hard-coded elements such as participants, instruments, and instrument fields) and dynamic elements excluded during the data release process:
<p>
<div id="general-rules-dropdown" class="table-banner" onclick="toggleCollapse(this)">
    <span class="table-text">General Rules Applied to All Data</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<ul>
    <li>For all participants with only one active V01 visit, sex is changed from "Male/Female" to “Other”</li>
    <li>All empty strings (“”) or missing values are replaced with the default ReproSchema-compliant string “n/a”</li>
    <li>“Candidate_Age” is computed in years except for V01, for which values are replaced with "n/a"</li>
    <li>Some fields can have out-of-range values. They are considered “extreme” values and are changed to “n/a”. This filter was applied to <code>pex_bm_healthv2_inf</code> - see <a href="../../measures/pregexp/preghealth#field-exclusions">Pregnancy & Infant Health > Field Exclusions</a> for details.
</ul>
</div>
</p>

<p>
<div id="static-exclusions-dropdown" class="table-banner" onclick="toggleCollapse(this)">
    <span class="table-text">Static Element Exclusions</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<b>Participant Filters:</b>
<ul>
    <li>Participants with a 'Postnatal Recruitment' visit  </li>
    <li>Multiple Birth Participants</li>
</ul>
<b>Excluded Instruments:</b>
<ul>
    <li>Biosensor Receipt Form ('sens_ch_rcpt')</li>
    <li>EEG Acquisition Checklists
    <ul>
        <li>Form ('eeg_ch_chkl')</li>
        <li>Form Reattempt - 1 ('eeg_ch_chkl_1')</li>
        <li>Form Reattempt - 2 ('eeg_ch_chkl_2')</li>
    </ul>
    <li>GABI Setup/Receipt
        <ul>
        <li>'nt_pa_gabi_setup'  </li>
        <li>'nt_pa_gabi_rcpt'  </li>
        </ul>
    </li>
    <li>ERICA forms
        <ul>
        <li>'mh_cg_erica_3_7m'  </li>
        <li>'mh_cg_erica_7_9m'  </li>
        <li>'mh_cg_erica_fcm_adm_3_7m'  </li>
        <li>'mh_cg_erica_fcm_adm_7_9m'  </li>
        </ul>
    </li>
    <li>MRI Checklists
        <ul>
        <li>Data Summary Form ('mri_ra_chkl_data')  </li>
        <li>Scan Session Summary Form ('mri_ra_chkl_scan')  </li>
        </ul>
    </li>
    <li>MRI Pre/Post Scan Prep ('mri_ra_prep')</li>
    <li>NIH Baby ToolBox ('ncl_ch_nbtb')</li>
    <li>Participant Feedback Form ('adm_cg_fb')</li>
    <li>RA Feedback ('adm_ra_fb')</li>
    <li>Participant Alerts ('admin_alert')</li>
    <li>TLFB (Timeline Follow Back) Summary Parser ('pex_ch_tlfb')</li>
    <li>Visit Level Data ('adm_fd_visitdata')</li>
    <li>Visit start ('visit_start')</li>
    <li>Urgent Events ('adm_fd_urgent')</li>
    <li>Transitions in Care Questionnaire ('sed_cg_tic')</li>
</ul>
<br><b>Excluded Instrument Fields:</b>
<ul>
    <li>Examiner ('Examiner’)  </li>
    <li>Date of Birth (‘DOB’)  </li>
    <li>Informant (‘informant’)  </li>
    <li>Validity (‘validity’)  </li>
    <li>Duration (‘duration’)  </li>
    <li>Window Difference (‘window_difference’)  </li>
    <li>Start timestamp (‘timestamp_start’)  </li>
    <li>Stop timestamp (‘timestamp_stop’)  </li>
    <li>REDCap timestamp (‘timestamp_redcap_locked’)  </li>
    <li>Visit Data ('visit_stage' removed from the 'visit_data' category)  </li>
    <li>'Height/Weight/Head Circumference' ('ph_ch_anthro')
        <ul>
        <li>BMI-related fields removed  </li>
        </ul>
    </li>
    <li>Breast Feeding History ('ph_cg_phx_i_bfh')
        <ul>
        <li>All fields except '001' excluded  </li>
        </ul>
    </li>
    <li>Filter out extreme values for 'Height/Weight/Head Circumference' ('ph_ch_anthro')
        <ul>
        <li>Length ('len_001_i_03'): Min => 30 / Max => 130  </li>
        <li>Weight ('wei_001_i_03'): Min => 0.5 / Max => 30  </li>
        <li>Head Circumference ('head_001_i_03'): Min => 25 / Max => 55  </li>
        </ul>
    </li>
    <li>Clinical Alerts  </li>
    <li>REDCap Complete status ('complete')  </li>
    <li>Scannable codes (BioSamples codes, tracking Nos, etc...)  </li>
    <li>Line fields</li>
</ul>
</div>
</p>

<p>
<div id="dynamic-exclusions-dropdown" class="table-banner" onclick="toggleCollapse(this)">
    <span class="table-text">Dynamic Element Exclusions</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
</p>
<b>Participant Filters:</b>
<ul>
    <li>No brain rating or brain rating noted “abnormal” are not selected</li>
    <li>Only active participants and sessions are selected</li>
    <li>Participants from Data Coordination Center (DCC) and University of Florida (UFL) sites are not selected</li>
    <li>Only participants with PSCIDs starting with “CH” are selected (excluding all test participants e.g. QI, YI, XI, PI)</li>
</ul>
<b>Visit Filters:</b>
<ul>
    <li>Only visits whose 'LaunchPad Complete' Status was set to 'Complete' before July 1st, 2024 are included</li>
</ul>
<b>Domain Filters:</b>
<ul>
    <li>BioSpecimens</li>
    <li>Geocoding data</li>
    <li>Transition in Care</li>
    <li>REDCap surveys filled out directly in LORIS (Identified based on LORIS 'Examiner' field not set to 'REDCap')</li>
</ul>
</div>
</p>





