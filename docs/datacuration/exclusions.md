# Exclusion Criteria 

## IMAGING
Following conversion to BIDS format, the MRI NIfTI and JSON files undergo additional quality checks to ensure data integrity. For instance, all images were verified to be acquired using a head coil before inclusion in the BIDS dataset. Additional exclusion criteria for each imaging modality, parsed from the image JSON files, are as follows:

<p>
<div id="exclusions-dropdown" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Exclusion Criteria</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<ul>
<u>T1w:</u>
  <li>TR outside of range 2.3-2.41</li>
  <li>TE outside of range 0.002-0.0035</li>
  <li>TI outside of range 1.06-1.1</li>
  <li>Slice thickness not being 0.8</li>
  <br>

<u>T2w and MRS Localizer:</u>
  <li>TR outside of range 2.5-4.5</li>
  <li>TE outside of range 0.09-0.15</li>
  <li>TI outside of range 0.29-0.33</li>
  <li>Slice thickness outside of range 0.563-0.565</li>
  <br>

<u>Diffusion:</u>
  <li>TR not being set to 4.8</li>
  <li>TE outside of range 0.0880-0.0980</li>
  <li>Slice thickness not being set to 1.7</li>
  <li>The total number of volumes between DWI AP and DWI PA is below 90 volumes</li>
  <br>

<u>EPI Fieldmap:</u>
  <li>TR outside of range 8.4-9.2</li>
  <li>TE outside of range 0.064-0.0661</li>
  <li>TI not being set to 2</li>
  <li>Slice thickness outside of range 0.563-0.565</li>
  <br>

<u>Functional:</u>
  <li>TR not being set to 1.725</li>
  <li>TE outside of range 0.0369-0.0371</li>
  <li>Slice thickness not being set to 2</li>
  <li>fMRI is shorter than 87 volumes (approximately less than 2.5 minutes long)</li>
</ul>
</div>
</p>


## PHENOTYPES
Below is a list of general rules applied to all data as well as static (i.e. precisely identified hard-coded elements such as participants, instruments, and instrument fields) and dynamic elements excluded during the data release process:

<p>
<div id="general-rules-dropdown" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">General Rules Applied to All Data</span>
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
<div id="static-exclusions-dropdown" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Static Element Exclusions</span>
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
<div id="dynamic-exclusions-dropdown" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Dynamic Element Exclusions</span>
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





