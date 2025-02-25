# Brain Imaging Data Structure (BIDS)
As much as possible, HBCD processing utilizes the [Brain Imaging Data Structure](https://bids-specification.readthedocs.io/en/stable/) (BIDS) standard for data organization. At a high level, raw HBCD BIDS data has the folder structure displayed below. The three main folders are as follows: see linked sections for further details on the contents and folder structure of each.

- [Raw BIDS Data](rawbids.md) (`rawdata/`): raw imaging, EEG, and motion data converted to BIDS
- [Derivatives](derivatives.md) (`derivatives/`): pre-processed imaging, EEG, and motion data derived from processing pipelines
- [Phenotype BIDS Data](phenotypes.md) (`phenotype/`): tabulated demographic, biospecimen, and instrument data  

<pre class="folder-tree">
bids/
|__ rawdata/ 
|   |__ sub-<span class="label">&lt;label&gt;</span>/
|   |   |__ sub-<span class="label">&lt;label&gt;</span>_sessions.tsv
|   |   |__ sub-<span class="label">&lt;label&gt;</span>_sessions.json
|   |   |__ ses-<span class="label">&lt;label&gt;</span>/
|   |       |__ anat/
|   |       |__ dwi/
|   |       |__ eeg/
|   |       |__ fmap/
|   |       |__ func/
|   |       |__ motion/
|   |       |__ mrs/
|   |       |__ sub-<span class="label">&lt;label&gt;</span>_ses-<span class="label">&lt;label&gt;</span>_scans.tsv
|   |       |__ sub-<span class="label">&lt;label&gt;</span>_ses-<span class="label">&lt;label&gt;</span>_scans.json
|   |
|   |__ dataset_description.json
|   |__ participants.tsv
|   |__ participants.json 
|
|__ derivatives/ 
|   |__ bibsnet/
|   |__ hbcd_motion/
|   |__ made/
|   |__ mriqc/
|   |__ nibabies/
|   |__ osprey/
|   |__ qmri_postproc/
|   |__ qsiprep/
|   |__ qsirecon/
|   |__ symri/
|   |__ xcp_d/
|
|__ phenotype/
|   |__ bio_biosample_<span class="placeholder">&lt;nails|urine&gt;</span>.tsv
|   |__ bio_biosample_<span class="placeholder">&lt;nails|urine&gt;</span>.json
|   |__ par_visit_data.tsv
|   |__ par_visit_data.json
|   |__ sed_basic_demographics.tsv
|   |__ sed_basic_demographics.json
|   |__ <span class="placeholder">&lt;instrument_name&gt;</span>.tsv
|   |__ <span class="placeholder">&lt;instrument_name&gt;</span>.json
|
|__ README    
</pre>

## Raw BIDS Conversion Procedures
For most imaging data, DICOM image files are converted to BIDS standard formatting using an [HBCD-customized version](https://github.com/rordenlab/dcm2niix/tree/c5caaa9f858b704b61d3ff4a7989282922dd712e) of the [dcm2niix](https://github.com/rordenlab/dcm2niix) tool. One exception is MRS, for which vendor-specific raw data formats (Siemens `.dat`; Philips data/list; GE P-file) were converted to BIDS using [spec2nii v0.7.0](https://github.com/wtclarke/spec2nii). 

For EEG, BIDS conversion  was handled by [EEG2BIDS Wizard](https://github.com/aces/eeg2bids), a custom MATLAB application installed at all HBCD sites to facilitate data handling and preprocessing. After each EEG session, raw data are uploaded to the Wizard, which, among other things, converts this data to the BIDS standard data structure.

### Hardcoded Fields for Philips & GE
In some cases, `dcm2niix` conversion led to missing or incorrectly configured NIfTI/JSON metadata. To address these issues, the headers for the file types listed below were hard-coded after conversion. These hard-coded values are also documented in the `HardCodedValues` field of the corresponding JSON sidecar file.

<ul>
<b>Philips</b>
<li>T1W: <code>RepetitionTime</code></li>
<li>DWI: <code>PhaseEncodingDirection</code>, <code>TotalReadoutTime</code>, & <code>SliceTiming</code> (<code>SmallDelta</code> & <code>LargeDelta</code> also added)</li>
<li>EPI: <code>PhaseEncodingDirection</code> & <code>TotalReadoutTime</code></li>
<li>BOLD:	<code>PhaseEncodingDirection</code>, <code>TotalReadoutTime</code>, & <code>SliceTiming</code></li>
<br>
<b>GE</b>
<li>T1W: <code>RepetitionTime</code></li>
</ul>

### QALAS Post-Conversion Modifications
Depending on the scanner manufacturer, `dcm2niix` conversion for QALAS produced either five 3D NIfTI files or a single 4D NIfTI file with five volumes (as well as missing JSON header information). To standardize the output, all `dcm2niix`-derived QALAS series were converted into five separate NIfTI files, each corresponding to a different inversion time (labeled using the `inv-<label>` BIDS entity). The associated JSON sidecar was then updated with the following:

1. `T2Prep` field of `inv-0` QALAS file hard-coded to 0.10 (Siemens), 0.09 (GE), and 0.10 (Philips)
2. `InversionTime` values (sec) for QALAS files hard-coded as follows for each manufacturer:

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

