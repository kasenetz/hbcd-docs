# Additional Exclusion Documentation

Includes [Text from Erik](#text-from-erik) and [removed DWI Scan Selection description](#diffusion-mri-selecting-best-dwi-scans)

## Text from Erik
### File Selection for the First Release
How were individual files selected for this first release? Because the HBCD project uses multiple processing pipelines—each with its own requirements—the files included in this release represent the union of all files that satisfy at least one pipeline’s criteria.
You can see the detailed requirements for each pipeline on the processing documentation webpage, in the “Quality Control Selection Information” sections for each tool. Some tools require a specific file type (e.g., T2w images) but assess it using two or more sets of QC (Quality Control) criteria. Typically, the first set of criteria combines manual and automated QC fields, while the second set uses only automated fields. In some cases, only the single highest-quality image is included; in others, any file that meets a defined threshold is included.

### Data Categories Without Pre-Processing QC
Certain data categories—such as motion (accelerometry), electroencephalography (EEG), and magnetic resonance spectroscopy (MRS)—do not have QC measures before processing. As a result, these files will vary in quality. In the case of MRS anatomical localizers, file selection does not rely on QC information at all, because the timing of the localizer acquisition is deemed more critical than its image quality.

### Where QC Information Is Stored
All quality control information is stored in the `sub-<label>_ses-<label>_scans.tsv` file located in each BIDS session folder. Most MRI file-selection procedures begin by requiring that an “overall QC” field equals 1. Next, many look at the QU_Motion field (a manual assessment of motion artifacts). If QU_Motion is unavailable or if two scans have the same value, other quality measures are used. For this first release, all high-resolution T1w and T2w scans—and most QALAS acquisitions—used QU_Motion to guide selection.

### Pipeline Requirements and Tool Combinations
Some pipelines require file types in specific combinations. If an imaging session (e.g., ses-V02 or ses-V03) only contains one of two (or more) necessary file types for a given pipeline, that lone file will not be used by that pipeline. However, because each tool has unique requirements, the same file might still be included if it fulfills another pipeline’s criteria.
Finally, two data sources—TB1 MRI acquisitions and electrocardiogram (ECG) data—are included in this release even though they are not used in current processing. The ECG data is acquired alongside EEG data using the same device.


## Diffusion MRI: Selecting Best DWI Scans
If there were multiple DWI scans available that passed QC, only the best quality scan was selected for processing based on additional QC metrics. For subjects with manual QC scores for all DWI images in a session (only a portion of data was selected for manual QC), to choose the best scan, the following metrics, in order of priority, were used to compare scan quality until the best was identified: `NumHeadCoilElem`, `QU_cotuff`, `QU_sus`, `QU_line`, `ngood_frames`, `line_mean_score`, and `tSNR_b0`. In the absence of manual QC metrics, the following were prioritized to select the best scan: `NumHeadCoilElem`, `ngood_frames`, `line_mean_score`, and `tSNR_b0`. These metrics are defined in the following table:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
<tfoot><tr><td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;" colspan="3"><b>**</b><i>Available for Siemens only: There are some visits on Siemens scanners with one or more scans for which some of the head coil elements were disabled (following detachment and reattachment of the anterior coil elements). In very rare cases, the site may recognize the problem at the time and reacquire the images. In cases like that, the scan with higher "NumHeadCoilElem” would be preferred.</i></td></tr></tfoot>
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">QC Metric</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Defnition</th>  
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Scoring</th>   
    </tr>
  </thead>
<tbody>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QC</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Overall manual QC score of 1 (pass) or 0 (fail)</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">1 (pass) or 0 (fail)</td>
	</tr>
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NumHeadCoilElem**</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of head coil elements</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NA</td>
	</tr>  
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_cotuff</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for FOV cutoff artifact</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">0 = absent ; 1 = mild; 2 = moderate; 3 = severe </td>
	</tr>  
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_sus</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for susceptibility artifact</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">0 = absent ; 1 = mild; 2 = moderate; 3 = severe </td>
	</tr>  
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">QU_line</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Qualitative manual QC score for line artifact</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">0 = absent ; 1 = mild; 2 = moderate; 3 = severe </td>
	</tr>  
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ngood_frames</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Number of frames without outlier slices for dMRI</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NA</td>
	</tr>  
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">line_mean_score</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Average line artifact score in frames with line artifacts</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NA</td>
	</tr>  
  <tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">tSNR_b0</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Median temporal SNR in brain mask for b=0 frames</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NA</td>
	</tr>  
</tbody>
</table>