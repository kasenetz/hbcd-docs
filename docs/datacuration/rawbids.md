# Raw BIDS Data
The `raw/` folder includes raw MR, EEG, and motion data organized under subject/session-specific directories. 

```
root/
|__ raw/ 
    |__ sub-<label>/
    |   |__ sub-<label>_sessions.tsv
    |   |__ sub-<label>_sessions.json
    |   |__ ses-<label>/
    |       |__ anat/
    |       |__ dwi/
    |       |__ eeg/
    |       |__ fmap/
    |       |__ func/
    |       |__ motion/
    |       |__ mrs/
    |       |__ sub-<label>_ses-<label>_scans.tsv
    |       |__ sub-<label>_ses-<label>_scans.json
    |
    |__ dataset_description.json
    |__ participants.tsv
    |__ participants.json 
```
In a large infant study, missing data is common, leading to variations in the number of folders and files available per subject and session. The HBCD acquisition spans multiple modalities, often collected at different times, with some acquisitions occurring on separate days even within the same modality. 

## Participant-, Session-, & Scan-Level Data
Participant-, session-, and scan-level data is captured by `participants.tsv`, `sessions.tsv`, and `scans.tsv` files respectively, each accompanied by `json` files with column descriptions and field definitions. Each is explained in detail in the following sections.

### Participant-Level Data
Participant-level data is stored in the `participants.tsv` file. This file includes information such as participant sex. Descriptions of the `tsv` column names and their properties are provided in the accompanying `participants.json` sidecar file.

### Session-Level Data
Session-level data is stored in the `sessions.tsv` file within the subject folder. This file provides details on the various sessions acquired for the participant, including the collection site, the participant’s age and gestational age at each session, and head size. *Note: age measures are computed based on a birthdate measure that is jittered up to 7 days.*

### Scan-Level Data
The `scans.tsv` file provided per session includes a variety of participant information (see [Fields included in `scans.tsv` file](#scanstsv)) as well as quality control (QC) metrics derived from raw data QC procedures (see [HBCD MR Quality Control Procedures](../measures/mri/qc.md)). Several of the processing pipelines query the `scans.tsv` to determine which files to include/exclude for processing. The criteria used are listed under the 'Quality Control Selection Information' under [Tool Names](https://hbcd-cbrain-processing.readthedocs.io/latest/tool_details.html#tool-names) on the HBCD Processing page.

As a reminder, only a portion of data undergoes manual review for quality control. Files that have not undergone manual QC will be missing fields related to manual QC (e.g. fields prepended with `QU_` in the list below). **Note that the `QC` field is automatically 1 (Pass) if manual QC was not performed.**

<p>
<div id="scanstsv" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="text">Fields included in <code>scans.tsv</code> files</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<p>
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
<tfoot><tr><td colspan="2"><b>**</b> <i>Age measures are computed based on a birthdate measure that is jittered up to 7 days</i></td></tr></tfoot>
<tbody>
  <thead>
	<tr>
		<th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Field</th>
		<th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
	</tr>
    </thead>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">filename</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Relative paths to files</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">acq_time</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Acquisition time</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">loris_qc_status</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pass Fail mapping from UCSD QC JSON file</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">loris_selected</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Whether the file is selected for further processing</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">site</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Site where the session data was collected</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">age</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Age (in years) of the candidate at the time of the scan**</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">gestational_age</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Gestational age (in days) based on the EDD</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">head_size</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Head size at the time of the scan</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nrev</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of reviewers for manual QC</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">revdisp</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Whether there was disparity / disagreement between reviewers</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QC</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Overall manual QC score of 1 (pass) or 0 (fail)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">notes</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Optional notes associated with manual quality control review</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_motion</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for motion</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_sus</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for susceptibility artifact</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_cutoff</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for FOV cutoff artifact</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_line</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for line artifact</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">line_nframes</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames with line artifacts</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">line_&ltmax|mean&gt_score</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltMaximum|Average&gt line artifact score across frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">line_&ltmax|mean&gt_count</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltMaximum|Average&gt line artifact count across frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">cutoff</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Sum of dorsal and ventral cutoff scores</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltdorsal|ventral&gt_cutoff</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltDorsal|Ventral&gt cutoff score</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_&ltmean|std&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Standard deviation&gt image intensity within brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_SNR</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Signal-to-noise ratio (mean/stdev) of image intensity within brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_&ltmin|max|median&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltMinimum|Maximum|Median&gt image intensity within brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_tSNR_&ltmean|median|std&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Median|Standard deviation&gt temporal SNR in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mean_&ltmotion|trans|rot&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Average framewise &ltdisplacement|translation|rotation&gt (mm)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">max_d&ltx|y|z&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Maximum absolute &ltx|y|z&gt translation (mm)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">max_r&ltx|y|z&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Maximum absolute &ltx|y|z&gt rotation (mm)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">subthresh_&lt02|03|04&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of seconds with framewise displacement less than &lt0.2|0.3|0.4&gt mm</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">aqc_motion</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Automated QC motion score for sMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nreps</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of repetitions / frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brainvol</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Volume of brain mask (mm^3)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">fwhm_x</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in x-axis (left-right)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">b0_&ltmedian|std&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltMedian|Standard Deviation&gt b=0 intensity in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">DTerr_&ltmean|median|std&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Median|Standard deviation&gt across frames of RMS residual error relative to RMS signal in brain voxels</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Completed</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Whether the series has the expected number of files</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NumberOfFiles</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of DICOM files</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">HBCD_compliant</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Whether the series passes a minimal protocol compliance check</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">AdditionalInfo</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Notes related to classification and protocol compliance</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MD_std</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Standard deviation of mean diffusivity in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">b0_mean</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Average b=0 intensity in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FA_std</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Standard deviation of fractional anisotropy in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MD_&ltmean|median&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Median&gt mean diffusivity in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">max_nbad_frames_per_&ltslice|frame&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Maximum number of outlier frames per &ltslice|frame&gt</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FA_&ltmean|median&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Median&gt fractional anisotropy in brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">fwhm_z</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in z-axis (inferior-superior)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_frame_slices</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of outlier frame-slices for dMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_frames</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames with outlier slices for dMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_slices</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of slices with outlier frames for dMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">fwhm_y</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in y-axis (anterior-posterior)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">qc_status</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Whether review is pending, complete, or has other status</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ngood_frames</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames without outlier slices for dMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">censor_thresh</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Threshold used for censoring outlier slices for dMRI</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nframes_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_frame_slices_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of outlier frame-slices for dMRI b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_frames_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames with outlier slices for dMRI b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nbad_slices_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of slices with outlier frames for dMRI b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ngood_frames_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames without outlier slices for dMRI b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FWHMx_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in x-axis (left-right) for b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FWHMy_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in y-axis (anterior-posterior) for b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FWHMz_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Full width half max spatial smoothness in z-axis (inferior-superior) for b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">tSNR_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median temporal SNR in brain mask for b=&lt0|500|1000|2000|3000&gt frames</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">DTerr_rel_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median across brain voxels of DTI RMS residual error for b=&lt0|500|1000|2000|3000&gt frames relative to within-voxel RMS b=0 signal</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">RSIerr_rel_b&lt0|500|1000|2000|3000&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median across brain voxels of RSI RMS residual error for b=&lt0|500|1000|2000|3000&gt frames relative to within-voxel RMS b=0 signal</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">DTerr_rel</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median across brain voxels of DTI RMS residual error for all frames relative to within-voxel RMS signal</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">RSIerr_rel</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median across brain voxels of RSI RMS residual error for all frames relative to within-voxel RMS signal</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NumberOfFilesMissing</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of DICOM files apparently missing (based on gaps in InstanceNumbers)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Num&ltHead|Neck|Spine&gtCoilElem</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of &lthead|neck|spine&gt coil elements</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_nvox_max</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of voxels within brain mask at maximum image intensity</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">brain_fvox_max</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Fraction of voxels within brain mask at maximum image intensity</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nonbrain_&ltmean|std|snr&gt</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">&ltAverage|Standard deviation|Signal-to-noise ratio (mean/stdev)&gt image intensity outside brain mask</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NumberOfFilesOrig</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">umber of DICOM files received (before excluding non-image, corrupt, or extra files)</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NumberOfFilesExtra</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of extra DICOM files received (non-image, corrupt, or extra files)</td>
	</tr>
</tbody>
</table>
</p>
</div>
</p>

## Imaging
### Anatomical (anat/)
Anatomical files include T1- and T2-weighted MRI images, MRS localizer files (`acq-mrsLocAx` and `acq-mrsLocCor` indicate axial and coronal localizers, respectively), and Quantitative MRI QALAS files. 
```
anat/
|__ sub-<label>_ses-<label>_run-<label>_T1w.nii.gz 
|__ sub-<label>_ses-<label>_run-<label>_T1w.json
|__ sub-<label>_ses-<label>_run-<label>_T2w.nii.gz
|__ sub-<label>_ses-<label>_run-<label>_T2w.json
|__ sub-<label>_ses-<label>_acq-<mrsLocAx|mrsLocCor>_run-<label>_T2w.nii.gz 
|__ sub-<label>_ses-<label>_acq-<mrsLocAx|mrsLocCor>_run-<label>_T2w.json
|__ sub-<label>_ses-<label>_run-<label>_inv-<0|1|2|3|4>_QALAS.nii.gz
|__ sub-<label>_ses-<label>_run-<label>_inv-<0|1|2|3|4>_QALAS.json
```
*Please see information about hardcoded fields for Philips and GE [here](overview.md/#hardcoded-fields-for-philips-ge) and post-BIDS conversion modifications made for QALAS [here](overview.md/#qalas-post-conversion-modifications).*

### Diffusion (dwi/)
Diffusion files include DWI runs (`*_dwi.nii.gz`) along with `bval` and `bvec` files, which provide the magnitudes and orientations of the diffusion gradients for each volume, respectively. Single-band reference files (`*_sbref.nii.gz`) are also included in the release. All images were acquired in both AP (`dir-AP`) and PA (`dir-PA`) phase encoding directions.
```
dwi/
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_dwi.bval
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_dwi.bvec
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_dwi.nii.gz
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_dwi.json
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_sbref.json
|__ sub-<label>_ses-<label>_dir-<AP|PA>_run-<label>_sbref.nii.gz
```
*NOTE: Please see information about hardcoded fields for Philips and GE [here](overview.md/#hardcoded-fields-for-philips-ge).*

### Functional (func/) and Fieldmaps (fmap/) 
Functional files include BOLD functional resting state images under `func/`. Each functional acquisition has an associated pair of EPI fieldmaps acquired to use for distortion correction under `fmap/`, with AP (`dir-AP`) and PA (`dir-PA`) phase encoding directions. 

**Siemens, GE, and Philips additionally include B1 fieldmaps.** For Siemens, `acq-<anat|fmap>` denotes the anatomical (like) image and scaled flip angle map whereas for GE and Philips, `acq-tr<1|2>` denotes the first and second TR image (*see BIDS specification for quantitative MRI: [TB1TFL and TB1RFM](https://bids-specification.readthedocs.io/en/stable/appendices/qmri.html#tb1tfl-and-tb1rfm-specific-notes) and [TB1AFI](https://bids-specification.readthedocs.io/en/stable/appendices/qmri.html#tb1afi-specific-notes)*):

```
|__ func/
|   |__ sub-<label>_ses-<label>_task-rest_dir-PA_run-<label>_bold.nii.gz
|   |__ sub-<label>_ses-<label>_task-rest_dir-PA_run-<label>_bold.json
|
|__ fmap/
    |__ sub-<label>_ses-<label>_dir-AP_run-<label>_epi.nii.gz
    |__ sub-<label>_ses-<label>_dir-AP_run-<label>_epi.json
    |__ sub-<label>_ses-<label>_dir-PA_run-<label>_epi.nii.gz
    |__ sub-<label>_ses-<label>_dir-PA_run-<label>_epi.json

[SIEMENS ONLY]
    |__ sub-<label>_ses-<label>_acq-anat_run-<label>_TB1TFL.nii.gz
    |__ sub-<label>_ses-<label>_acq-anat_run-<label>_TB1TFL.json
    |__ sub-<label>_ses-<label>_acq-fmap_run-<label>_TB1TFL.nii.gz
    |__ sub-<label>_ses-<label>_acq-fmap_run-<label>_TB1TFL.json

[GE AND PHILIPS ONLY]
    |__ sub-<label>_ses-<label>_acq-tr1_run-<label>_TB1AFI.nii.gz 
    |__ sub-<label>_ses-<label>_acq-tr1_run-<label>_TB1AFI.json 
    |__ sub-<label>_ses-<label>_acq-tr2_run-<label>_TB1AFI.nii.gz
    |__ sub-<label>_ses-<label>_acq-tr2_run-<label>_TB1AFI.json

```
*NOTE: Please see information about hardcoded fields for Philips and GE [here](overview.md/#hardcoded-fields-for-philips-ge).*

### MR Spectroscopy (mrs/)
MRS files include metabolite and water reference (`*_<svs|ref>.nii.gz`) data aqcuired via short-echo-time (TE = 35 ms) and HERCULES (spectral-edited, TE = 80 ms) (`acq-<shortTE|hercules>`). The JSON sidecar files include the dimensions of the NIfTI-MRS data array, holding different coil elements in dimension 5 and different transients in dimension 6.
```
mrs/
|__ sub-<label>_ses-<label>_acq-shortTE_run-<label>_svs.nii.gz
|__ sub-<label>_ses-<label>_acq-shortTE_run-<label>_svs.json
|__ sub-<label>_ses-<label>_acq-shortTE_run-<label>_ref.nii.gz
|__ sub-<label>_ses-<label>_acq-shortTE_run-<label>_ref.json
|__ sub-<label>_ses-<label>_acq-hercules_run-<label>_svs.nii.gz
|__ sub-<label>_ses-<label>_acq-hercules_run-<label>_svs.json
|__ sub-<label>_ses-<label>_acq-hercules_run-<label>_ref.nii.gz
|__ sub-<label>_ses-<label>_acq-hercules_run-<label>_ref.json
```

## EEG
For EEG BIDS data, the specific **location of electrodes**, placed on either the head (`acq-eeg`) or chest (`acq-ecg`), is specified in the `*_electrodes.tsv` files following cartesian coordinates provided by the accompanying `*_coordsystem.json` file. For **task acquisitions**, the task is specified by `task-<label>`, with task options of `FACE`, `MMN`, `RS`, and `VEP` (see task details [here](../measures/eeg/index.md)).

```
eeg/

[LOCATION OF ELECTRODES]

|__sub-<label>_ses-<label>_acq-ecg_space-CapTrak_electrodes.tsv
|__sub-<label>_ses-<label>_acq-ecg_space-CapTrak_coordsystem.json
|__sub-<label>_ses-<label>_acq-eeg_space-<CapTrak|CTF>_electrodes.tsv
|__sub-<label>_ses-<label>_acq-eeg_space-<CapTrak|CTF>_coordsystem.json

[TASK ACQUISITIONS]

|__sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-<eeg|ecg>_channels.tsv
|__sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-<eeg|ecg>_eeg.json
|__sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-<eeg|ecg>_eeg.set
|__sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-<eeg|ecg>_events.tsv
|__sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-<eeg|ecg>_events.json
|
|__ sourcedata/
    |__ sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-eeg_flags.json
    |__ sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-eeg_impedances.json
    |__ sub-<label>_ses-<label>_task-<FACE|MMN|RS|VEP>_acq-eeg_eventlogs.txt
```

<ul>
The accompanying <code>sourcedata/</code> files include:
<li>Information about quality control flags and acquisition (<code>*_flags.json</code>- see QC details <a href="../../measures/eeg/#quality-control">here</a>)</li>
<li>Impedance values used to ensure good electrode contact (<code>*_impedence.json</code>)</li>
<li>Task stimuli presentations (<code>*_eventlogs.txt</code>)</li>
</ul>


## Motion
Axivity AX6 sensor data provided in the data release include `_motion.tsv` sensor recordings with corresponding `*_channels.tsv` files that describe each column of of the motion file. The acquisition (`acq-`) label for the calibration files is `calibration` while the label for the 72-hr data files is `primary`. The `task` label will be either `LeftLegMovement` or `RightLegMovement` for sensors placed on the left or right leg. Each `.tsv` file is accompanied by a JSON sidecar containing recording-related metadata: 

```
motion/  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_motion.tsv  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_motion.json
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_channels.tsv  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_channels.json
```