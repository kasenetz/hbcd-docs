# Overview

## Brain Imaging Data Structure (BIDS)
As much as possible, HBCD processing utilizes the [Brain Imaging Data Structure](https://bids-specification.readthedocs.io/en/stable/) (BIDS) standard for data organization. At a high level, the BIDS structure for raw HBCD data will appear like so:

```
root/
|__ assembly_bids/ 
|   |__ participants.tsv
|   |__ participants.json 
|   |__ sub-<label>/
|       |__ sub-<label>_sessions.tsv
|       |__ sub-<label>_sessions.json
|       |__ ses-<label>/
|           |__ anat/
|           |__ dwi/
|           |__ eeg/
|           |__ fmap/
|           |__ func/
|           |__ motion/
|           |__ mrs/
|           |__ sub-<label>_ses-<label>_scans.tsv
|           |__ sub-<label>_ses-<label>_scans.json
|   
|__ phenotype/
|   |__ biosample_urine.tsv
|   |__ biosample_urine.json
|   |__ sed_basic_demographics.tsv
|   |__ sed_basic_demographics.json
|   |__ visit_data.tsv
|   |__ visit_data.json
|   |__ <instrument_name>.tsv (repeat for all selected instruments)
|   |__ <instrument_name>.json (repeat for all selected instruments)
```

The **`assembly_bids`** folder includes raw MR, EEG, and motion data organized under subject/session-specific directories. In a large infant study, missing data is common, leading to variations in the number of folders and files available per subject and session. The HBCD acquisition spans multiple modalities, often collected at different times, with some acquisitions occurring on separate days even within the same modality. Participant-, session-, and scan-level data is captured by `participants.tsv`, `sessions.tsv`, and `scans.tsv` files respectively, each accompanied by JSON files with column descriptions and field definitions.

The **`phenotype`** folder includes instrument data, visit data, biosample, and demographics information for all participants.


## BIDS Conversion Procedures
For most imaging data, DICOM image files are converted to BIDS standard formatting using an [HBCD-customized version](https://github.com/rordenlab/dcm2niix/tree/c5caaa9f858b704b61d3ff4a7989282922dd712e) of the [dcm2niix](https://github.com/rordenlab/dcm2niix) tool. One exception is MRS, for which vendor-specific raw data formats (Siemens `.dat`; Philips data/list; GE P-file) were converted to BIDS using [spec2nii v0.7.0](https://github.com/wtclarke/spec2nii). 

For EEG, BIDS conversion  was handled by [EEG2BIDS Wizard](https://github.com/aces/eeg2bids), a custom MATLAB application installed at all HBCD sites to facilitate data handling and preprocessing. After each EEG session, raw data are uploaded to the Wizard, which, among other things, converts this data to the BIDS standard data structure.

<p>
<div id="notification-banner" class="notification-banner">
<span>
    <span class="emoji">&#x1f4a1;</span>
    <span class="text">Post-conversion modifications made for Philips and GE:</span>
</span>
</div>
</p>

In some cases, `dcm2niix` conversion led to missing or incorrectly configured NIfTI/JSON metadata. To address these issues, the headers for the file types listed below were hard-coded after conversion. These hard-coded values are also documented in the `HardCodedValues` field of the corresponding JSON sidecar file.

<ul>
<b>Philips</b>
<li>T1W: <i>RepetitionTime</i></li>
<li>DWI: <i>PhaseEncodingDirection</i>, <i>TotalReadoutTime</i>, & <i>SliceTiming</i> (<i>SmallDelta</i> & <i>LargeDelta</i> also added)</li>
<li>EPI: <i>PhaseEncodingDirection</i> & <i>TotalReadoutTime</i></li>
<li>BOLD:	<i>PhaseEncodingDirection</i>, <i>TotalReadoutTime</i>, & <i>SliceTiming</i></li>
<br>
<b>GE</b>
<li>T1W: <i>RepetitionTime</i></li>
</ul>

<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">QALAS Post-Conversion Modifications</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<br>
<p>
Depending on the scanner manufacturer, <i>dcm2niix</i> conversion for QALAS produced either five 3D NIfTI files or a single 4D NIfTI file with five volumes (as well as missing JSON header information). To standardize the output, all <i>dcm2niix</i>-derived QALAS series were converted into five separate NIfTI files, each corresponding to a different inversion time (labeled using the <i>inv-&lt;label&gt;</i> BIDS entity). The associated JSON sidecar was then updated with the following:</p>
1.  <i>T2Prep</i> field of <i>inv-0</i> QALAS file hard-coded to 0.10 (Siemens), 0.09 (GE), and 0.10 (Philips)
<br>
<br>
<p>2.  <i>InversionTime</i> values (sec) for QALAS files hard-coded as follows for each manufacturer:</b></p>
<table>
  <tr>
  <th width="100">QALAS file</th>
  <th width="100">Siemens</th>
  <th width="100">GE</th>
  <th>Philips</th>
  </tr>
  <tbody>
    <tr>
    <td>inv-0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    </tr>
    <tr>
    <td>inv-1</td>
    <td>0.1</td>
    <td>0.119300</td>
    <td>0.115000</td>
    </tr>
    <tr>
    <td>inv-2</td>
    <td>1</td>
    <td>1.0191834</td>
    <td>1.010522</td>
    </tr>
    <tr>
    <td>inv-3</td>
    <td>1.9</td>
    <td>1.919068</td>
    <td>1.906045</td>
    </tr>
    <tr>
    <td>inv-4</td>
    <td>2.8</td>
    <td>2.818952</td>
    <td>2.801567</td>
    </tr>
  </tbody>
</table>
</div>
</p>

