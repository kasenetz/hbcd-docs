# Overview: HBCD Raw MRI Data QC
Quality control (QC) procedures involve automated and manual methods to evaluate unprocessed or minimally processed MRI data for issues such as incorrect acquisition parameters, imaging artifacts, or corrupted files. The purpose of raw data QC is to identify and exclude data with significant artifacts, preventing their inclusion in subsequent image processing and the final data pool. As such, quality control metrics are utilized during the conversion process to the Brain Imaging Data Structure (BIDS) standard to exclude problematic scans to ensure proper data curation in preparation for image preprocessing as described [here](../../datacuration/bids.md#data-curation--exclusion-criteria).

## Automated QC
An initial automated protocol compliance check is conducted by extracting information from DICOM headers to identify common issues and protocol deviations, such as missing files or incorrect patient orientation. Protocol compliance criteria include whether key imaging parameters, such as voxel size or repetition time, match the expected values for a given scanner. Out-of-compliance series are reviewed and sites are contacted if corrective action is required. For dMRI and fMRI series, the presence or absence of corresponding echo-planar imaging (EPI) sequences (often referred to as a “field map” or “B0 map”) used for distortion correction is checked. 

In addition to protocol adherence, each imaging series is also automatically checked for completeness to confirm that the number of files matches what was expected for each series on each scanner. Missing files are typically indicative of either an aborted scan or incomplete data transfer, the latter of which can usually be resolved through re-initiating the data transfer. Errors in the unpacking and processing of the imaging data at various stages are tracked, allowing for an assessment of the number of failures at each stage and prioritization of efforts to resolve problems and prevent future errors.

A complete imaging session consists of the following valid series:
<table dir="ltr" border="1" cellspacing="0" cellpadding="0" data-sheets-root="1" data-sheets-baot="1"><colgroup><col width="200" /><col width="250" /></colgroup>
<tbody>
	<tr>
		<td>Structural T1 Block:</td>
		<td>T1</td>
	</tr>
	<tr>
		<td>Structural T2 Block:</td>
		<td>T2</td>
	</tr>
	<tr>
		<td>Diffusion (dMRI) Block:</td>
		<td>dMRI AP <br /> dMRI PA</td>
	</tr>
	<tr>
		<td>Resting state (rsfMRI) Block:</td>
		<td>fMRI field map AP<br /> fMRI field map PA<br /> rsfMRI (run 1)<br /> rsfMRI (run 2)</td>
	</tr>
	<tr>
		<td>MRS Block</td>
		<td>SVS localizer<br /> MRS</td>
	</tr>
	<tr>
		<td>Quantitative (qMRI) Block</td>
		<td>B1 Map<br /> 3DMagic/QALAS</td>
	</tr>
</tbody>
</table>

Automated QC metrics such as signal-to-noise ratio (SNR) and head motion statistics are computed from the image data. For structural scans (T1w, T2w, and quantitative MRI), metrics include mean and SD of brain values and a deep learning model estimates motion artifacts. For dMRI, fMRI, and field maps, metrics are generated to assess for motion, bad frames, line artifacts, and field-of-view (FOV) cutoff. Head motion is quantified by frame-to-frame displacement, known as framewise displacement (FD) and includes average FD as well as the number of seconds with FD less than 0.2 mm, 0.3 mm, and 0.4 mm (Power et al. 2012). SNR is additionally assessed via full width half max spatial smoothness (FWHM) and temporal SNR (tSNR), computed after motion correction (Triantafyllou et al. 2005).

For dMRI series, head motion is estimated by registering each frame to a corresponding image synthesized from a tensor fit, accounting for variation in image contrast across diffusion orientations (Hagler et al. 2009). Dark slices, artifacts caused by abrupt head movements, are identified as outliers based on the root mean squared (RMS) difference between the original data and the tensor-fitted data. The total number of slices and frames affected by these motion artifacts are calculated for each dMRI series.

## Manual Review
Based on the automated metrics above, a subset of series are selected for manual review using multivariate prediction and Bayesian classifiers. Trained technicians use in-house software for standardized and efficient QC. For each subject, the technician inspects a display of multi-view and multi-slice image montages and enter scores. Each subject will also prompt for notes at the end of the review, before confirming, repeating, or skipping the subject, further reducing room for human error. 

During review, data quality is scored according to the severity of specific artifacts, rated on a scale of 0 to 3, where 0 indicates no artifact, 1 indicates mild, 2 moderate, and 3 severe. Structural scans include review of T1w, T2w, and qMRI as well as additional scan types including B1 field maps, used for bias field correction of qMRI scans, and SVS localizer scans used to define the ROI for MRS (spectroscopy) scans. Reviewers rate scans for **motion artifacts** (e.g. ripples, blurring) and document other issues such as **intensity inhomogeneity** or **ghosting** (when the slice location is outside the FOV, creating a fainter displaced copy of the head, brain, or eyes).

For dMRI, fMRI, and field maps, scored artifacts include **susceptibility artifacts** (spatial and/or signal distortions including “drop-out” regions in the brain with greatly reduced or no signal, signal bunching, and/or warping), **FOV cutoff**, and **line artifacts** (horizontal lines present in the sagittal view, including dark slice-frame and interleaved sliced offset). A derived image of fractional anisotropy, visualized as a color-coded map that shows the directional preferences for diffusion, is additionally reviewed for DTI.

Series with severe artifacts that compromise data usability are rejected (QC = 0) and excluded from subsequent processing and analysis. The post-processing team selects from remaining series based on manual ratings, notes, and automated scores (e.g., minimum of 60% diffusion encoding volumes without significant artifacts).

<details class="collapsible references">
<summary class="references">References</summary>
<p>Dean III, D. C., Tisdall, M. D., Wisnowski, J. L., Feczko, E., Gagoski, B., Alexander, A. L., ... &amp; HBCD MRI Working Group. (2024). Quantifying brain development in the HEALthy Brain and Child Development (HBCD) Study: The magnetic resonance imaging and spectroscopy protocol. <em>Developmental Cognitive Neuroscience</em>, 70, 101452. <a href="https://doi.org/10.1016/j.dcn.2024.101452">https://doi.org/10.1016/j.dcn.2024.101452</a></p>

<p>Hagler, D. J., Jr, Ahmadi, M. E., Kuperman, J., Holland, D., McDonald, C. R., Halgren, E., &amp; Dale, A. M. (2009). Automated white-matter tractography using a probabilistic diffusion tensor atlas: Application to temporal lobe epilepsy. Human Brain Mapping, 30(5), 1535–1547. <a href="https://doi.org/10.1002/hbm.20619">https://doi.org/10.1002/hbm.20619</a></p>

<p>Power, J. D., Barnes, K. A., Snyder, A. Z., Schlaggar, B. L., &amp; Petersen, S. E. (2012). Spurious but systematic correlations in functional connectivity MRI networks arise from subject motion. NeuroImage, 59(3), 2142–2154. <a href="https://doi.org/10.1016/j.neuroimage.2011.10.018">https://doi.org/10.1016/j.neuroimage.2011.10.018</a></p>

<p>Triantafyllou, C., Hoge, R. D., Krueger, G., Wiggins, C. J., Potthast, A., Wiggins, G. C., &amp; Wald, L. L. (2005). Comparison of physiological noise at 1.5 T, 3 T and 7 T and optimization of fMRI acquisition parameters. NeuroImage, 26(1), 243–250. <a href="https://doi.org/10.1016/j.neuroimage.2005.01.007">https://doi.org/10.1016/j.neuroimage.2005.01.007</a></p>

</details>