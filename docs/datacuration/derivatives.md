# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the [processing pipelines](../processing/pipelines.md). A description of HBCD-specific processing parameters used for each pipeline is available on the [HBCD Processing](https://hbcd-cbrain-processing.readthedocs.io/latest/) webpage. The following sections outline the session-level file and folder contents for each pipeline. 
```
bids/
|__ derivatives/ 
    |__ bibsnet/
    |__ hbcd_motion/
    |__ made/
    |__ mriqc/
    |__ nibabies/
    |__ osprey/
    |__ qmri_postproc/
    |__ qsiprep/
    |__ qsirecon/
    |__ qsirecon-DIPYDKI/
    |__ qsirecon-DSIStudio/
    |__ qsirecon-NODDI/
    |__ qsirecon-TORTOISE_model-MAPMRI/
    |__ qsirecon-TORTOISE_model-tensor/
    |__ symri/
    |__ xcp_d/
```
<p>
<div id="visformat" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Format of File Structure Visuals</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<li><strong>The following formatting was employed to enhance readability of the file structure visuals:</strong></li>
<ul>
<li>The BIDS entities <code>sub-&lt;label&gt;_ses-&lt;label&gt;</code> are replaced with the string <code>SUBSES</code></li>
<li>Some entities include a set of specific values, each of which is associated with a separate file: these values are either enclosed within <code>&lt;&gt;</code> as a list, separated by <code>|</code>, or listed separately within a <strong>Label Values Legend</strong></li>
<li>Several pipelines produce an <code>.html</code> visual summary report intended to be used for quality assessment of processed outputs. These files, typically located at either the pipeline folder or session-level, source their images from a <code>figures/</code> folder found in the derivatives. For readability, the contents of the <code>figures/</code> folders are not listed</li>
</ul>
</div>
</p>

## BIBSNet (`bibsnet/`)
BIBSNet outputs brain segmentations and masks in native T1w and T2w space as well as `volumes.tsv` files with ROI volume statistics. Additional details can be found [here](https://bibsnet.readthedocs.io/en/latest/outputs/).
```
bibsnet/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_dseg.nii.gz
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_dseg.json
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_volumes.tsv
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_volumes.json            
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_brain-mask.nii.gz
            |__ SUBSES_space-<T1w|T2w>_desc-aseg_brain-mask.json
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## HBCD-Motion (`hbcd_motion/`)
The HBCD-Motion pipeline is used to process the HBCD Axivity Ax6 sensor recordings of infant leg movements across 72 continuous hours. Please see a full description of the output files on their webpage [here](https://hbcd-motion-postproc.readthedocs.io/en/latest/outputs.html#outputs).
```
hbcd_motion/
|__ sub-<label>/
    |__ ses-<label>/
        |__ motion/
            |__ Kinematics/
            |   |__ SUBSES_desc-kinematics_recording-20_motion.json
            |   |__ SUBSES_desc-kinematics_recording-25_motion.json
            |
            |__ PA/
            |   |__ SUBSES_leg-<left|right>_desc-accelerationPA_BOUTS.tsv
            |   |__ SUBSES_leg-<left|right>_desc-accelerationPA_LOG.txt
            |   |__ SUBSES_leg-<left|right>_desc-accelerationPA_RAW.tsv
            |   |__ SUBSES_leg-<left|right>_desc-accelerationPA_SUMMARY.json
            |   |__ SUBSES_leg-<left|right>_desc-jerkPA_BOUTS.tsv
            |   |__ SUBSES_leg-<left|right>_desc-jerkPA_LOG.txt
            |   |__ SUBSES_leg-<left|right>_desc-jerkPA_RAW.tsv
            |   |__ SUBSES_leg-<left|right>_desc-jerkPA_SUMMARY.json
            |
            |__ PARAMETERS.json
            |__ SUBSES_leg-<left|right>_desc-calibrated_recording-20_motion.tsv
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder structure visual.*

## HBCD-MADE (`made/`)
HBCD-MADE produces preprocessed EEG derivatives. Please see the [HBCD-MADE webpage](https://docs-hbcd-made.readthedocs.io/en/latest) for a full explanation of the derivative files displayed below.
```
made/
|__ sub-<label>/
    |__ ses-<label>/
        |__ eeg/
            |__ filtered_data/
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_acq-eeg_desc-filtered_eeg.fdt
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_acq-eeg_desc-filtered_eeg.set
            |
            |__ ica_data/
            |   |__ SUBSES_adjustReport.txt
            |   |__ SUBSES_desc-mergedICA_eeg.fdt
            |   |__ SUBSES_desc-mergedICA_eeg.set
            | 
            |__ merged_data/
            |   |__ SUBSES_desc-merged_eeg.fdt
            |   |__ SUBSES_desc-merged_eeg.json
            |   |__ SUBSES_desc-merged_eeg.set
            | 
            |__ processed_data/
            |   |__ sub-<label>_task-FACE_desc-Oz_diffERP.jpg
            |   |__ sub-<label>_task-FACE_desc-diffInvVsUpr_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-diffObjVsUp2_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-inverted_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-object_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-oz_ERP.jpg
            |   |__ sub-<label>_task-FACE_desc-upright_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-upright2_topo.jpg
            |   |__ sub-<label>_task-MMN-desc-Deviant_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-diffDevVsSta_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-diffDevVsPre_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-preDeviant_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-standard_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-T7t8_diffERP.jpg
            |   |__ sub-<label>_task-MMN_desc-t7t8_ERP.jpg
            |   |__ sub-<label>_task-RS_desc-allChAvg_PSD.jpg
            |   |__ sub-<label>_task-RS_desc-allCh_PSD.jpg
            |   |__ sub-<label>_task-RS_desc-ROI_PSD.jpg
            |   |__ sub-<label>_task-VEP_desc-oz_ERP.jpg
            |   |__ sub-<label>_task-VEP_topo.jpg
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_ERPSummaryStats.csv
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_ERPTrialMeasures.csv
            |   |__ SUBSES_task-RS_powerSummaryStats.csv
            | 
            |__ SUBSES_acq-eeg_preprocessingReport.csv
            |__ SUBSES_task-<FACE|MMN|RS|VEP>_acq-eeg_specification.json
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## MRIQC (`mriqc/`)
MRIQC extracts no-reference IQMs (image quality metrics) from structural (T1w and T2w) and functional MRI (magnetic resonance imaging) data (contained in the JSON files under `anat/` and `func/`) and also generates visual `.html` report files in the root pipeline folder. Please refer to the [MRIQC webpage](https://mriqc.readthedocs.io/en/latest/about.html) to read details about the outputs displayed below.
```
mriqc/
|__ sub-<label>/
|   |__ ses-<label>/
|       |__ anat/
|       |   |__ SUBSES_run-<label>_T1w.json
|       |   |__ SUBSES_run-<label>_T2w.json
|       |
|       |__ func/
|           |__ SUBSES_task-rest_dir-PA_run-<label>_bold.json
|        
|__ SUBSES_run-<label>_T1w.html
|__ SUBSES_run-<label>_T2w.html
|__ SUBSES_task-rest_dir-PA_run-<label>_bold.html
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## Infant-fMRIPrep (`nibabies/`)
Infant-fMRIPrep (also known as NiBabies) outputs from minimal structural and functional MRI processing include visual quality assessment reports, preprocessed derivatives, and confounds to be used for denoising in subsequent processing procedures. Please see their webpage [here](https://nibabies.readthedocs.io/en/latest/outputs.html) for a detailed description of the file outputs.

<details open>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>SUBSES-(F)RUN</b>: For brevity, the BIDS entities below are replaced with the indicated strings:
        <ul>
        <li><code>sub-&lt;label&gt;_ses-&lt;label&gt;_run-&lt;label&gt;</code> ▸ <code>SUBSES-RUN</code></li>
        <li><code>sub-&lt;label&gt;_ses-&lt;label&gt;_task-rest_dir-PA_run-&lt;label&gt;</code> ▸ <code>SUBSES-FRUN</code></li>
        </ul>
    </li>
    <li><b>JSONs</b>: Files with corresponding JSONs (not displayed) are labeled with <code>(+JSON)</code> after the filename</li>
    <li><b>&ltXFMSPACE&gt</b> label values: <code>MNI152NLin6Asym_res-2</code>, <code>MNIInfant+1</code>, <code>fsnative</code></li>
    <li><b>&ltSURF&gt</b> label values: <code>inflated</code>, <code>midthickness</code>, <code>pial</code>, <code>sphere</code>, <code>white</code>
    <li><b>&ltSPACE&gt</b> label values: <code>MNI152NLin6Asym_res-2</code>, <code>T2w</code></li>
    <li><b>&ltFMAPID&gt</b> potential label values: <code>auto00000</code>, <code>auto00001</code>, <code>auto00002</code>, & <code>auto000003</code>, <code>auto000004</code></li>
    <li><b>&ltFROM&gt</b> label values: <code>boldref_to-T2w_mode-image_desc-coreg</code>, <code>boldref_to-auto00000_mode-image</code>, <code>orig_to-boldref_mode-image_desc-hmc</code>
  </ul>
</details>

```
nibabies/
|__ sub-<label>/
|   |__ figures/
|   |__ ses-<label>/
|       |__ anat/
|       |   |__ SUBSES-RUN_desc-preproc_T2w.nii.gz (+JSON)
|       |   |__ SUBSES-RUN_from-<XFMSPACE>_to-T2w_mode-image_xfm.h5
|       |   |__ SUBSES-RUN_from-T2w_to-<XFMSPACE>_mode-image_xfm.h5
|       |   |__ SUBSES-RUN_hemi-<L|R>_<curv|sulc|thickness>.shape.gii
|       |   |__ SUBSES-RUN_hemi-<L|R>_<SURF>.surf.gii
|       |   |__ SUBSES-RUN_hemi-<L|R>_space-dhcpAsym_desc-reg_sphere.surf.gii
|       |   |__ SUBSES-RUN_hemi-<L|R>_space-fsaverage_desc-reg_sphere.surf.gii
|       |   |__ SUBSES-RUN_space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz (+JSON)
|       |   |__ SUBSES-RUN_space-MNI152NLin6Asym_res-2_desc-preproc_T2w.nii.gz (+JSON)
|       |   |__ SUBSES-RUN_space-MNI152NLin6Asym_res-2_dseg.nii.gz (+JSON)
|       |   |__ SUBSES-RUN_space-<SPACE>_label-<CSF|GM|WM>_probseg.nii.gz
|       |   |__ SUBSES-RUN_space-T2w_desc-<aparcaseg|aseg>_dseg.nii.gz
|       |   |__ SUBSES-RUN_space-T2w_dseg.nii.gz
|       |   |__ SUBSES-RUN_space-T2w_desc-ribbon_mask.nii.gz (+JSON)
|       |   |__ SUBSES-RUN_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii (+JSON)
|       |
|       |__ fmap/
|       |   |__ SUBSES-RUN_fmapid-<FMAPID>_desc-coeff_fieldmap.nii.gz
|       |   |__ SUBSES-RUN_fmapid-<FMAPID>_desc-epi_fieldmap.nii.gz
|       |   |__ SUBSES-RUN_fmapid-<FMAPID>_desc-preproc_fieldmap.nii.gz (+JSON)
|       |
|       |__ func/ (ALL +JSON)
|       |   |__ SUBSES-FRUN_desc-brain_mask.nii.gz
|       |   |__ SUBSES-FRUN_desc-confounds_timeseries.tsv
|       |   |__ SUBSES-FRUN_desc-coreg_boldref.nii.gz
|       |   |__ SUBSES-FRUN_desc-hmc_boldref.nii.gz 
|       |   |__ SUBSES-FRUN_desc-preproc_bold.nii.gz
|       |   |__ SUBSES-FRUN_from-<FROM>_xfm.txt
|       |   |__ SUBSES-FRUN_hemi-<L|R>_space-fsnative_bold.func.gii
|       |   |__ SUBSES-FRUN_space-<SPACE>_boldref.nii.gz
|       |   |__ SUBSES-FRUN_space-<SPACE>_desc-brain_mask.nii.gz
|       |   |__ SUBSES-FRUN_space-<SPACE>_desc-preproc_bold.nii.gz
|       |   |__ SUBSES-FRUN_space-fsLR_den-91k_bold.dtseries.nii
|       |
|       |__ log/
|
|__ SUBSES.html
```
*See [Format of File Structure Visuals](#visformat) for further guidance on interpreting the folder tree above.*

## OSPREY-BIDS (`osprey/`)
OSPREY-BIDS is the BIDS extension to the OSPREY pipeline used to process HBCD magnetic resonance spectroscopy (MRS) data. The `HERCULES` and `unedited` folders have matching structures, so only one is displayed below. For readability, the image files under `figures/` are not listed. Also note that filenames may additionally include `run-<label>`. Please see their [webpage](https://osprey-bids.readthedocs.io/en/latest/index.html) for a detailed explanation of these outputs.
```
osprey/
|__ sub-<label>/
    |__ ses-<label>/
        |__ HERCULES/
        |   |__ PreOspreyLocalizerReg/
        |   |   |__ figures/
        |   |   |__ aalreference_seg_aligned_to_localizer.nii.gz
        |   |   |__ c<1|2|3>reference_seg_aligned_to_localizer.nii.gz
        |   |   |__ readme.txt
        |   |   |__ reference_<img|seg>_aligned_to_localizer.nii.gz
        |   |   |__ registration_summary.json
        |   |   |__ transform_mat.npy
        |   |
        |   |__ QuantifyResults/
        |   |   |__ <diff1|diff2|sum>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.json
        |   |   |__ <diff1|diff2|sum>_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_AlphaCorrWaterScaled_Voxel_1_Basis_1.json        
        |   |   |__ <diff1|diff2|sum>_amplMets_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_amplMets_Voxel_1_Basis_1.json
        |   |   |__ <diff1|diff2|sum>_<CSF|raw>WaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_<CSF|raw>WaterScaled_Voxel_1_Basis_1.json
        |   |   |__ <diff1|diff2|sum>_tCr_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_tCr_Voxel_1_Basis_1.json
        |   |   |__ <diff1|diff2|sum>_TissCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ <diff1|diff2|sum>_TissCorrWaterScaled_Voxel_1_Basis_1.json
        |   |
        |   |__ Reports/
        |   |   |__ reportFigures/
        |   |   |__ sub-<label>-report.html
        |   |
        |   |__ SegMaps/
        |   |   |__ TissueFractions_Voxel_1.tsv
        |   |   |__ TissueFractions_Voxel_1.json
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-CSF.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-GM.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-Tha.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-WM.nii.gz
        |   |
        |   |__ VoxelMasks/
        |   |   |__ SUBSES_acq-hercules_svs_space-scanner_mask.nii.gz
        |   |
        |   |__ LogFile.txt
        |   |__ QM_processed_spectra.tsv
        |   |__ QM_processed_spectra.json
        |   |__ SummaryMRSinMRS.md
        |   |__ subject_names_and_excluded.tsv
        |   |__ subject_names_and_excluded.json
        |   |__ wrapper_settings.mat
        |   |__ wrapper_settings.json
        |
        |__ unedited/
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## qMRI Postproc (`qmri_postproc/`)
This pipeline performs minimal post-processing for SyMRI synthetic images derived from QALAS acquisition. Please visit the [qMRI PostProc webpage](https://hbcd-symri-postproc.readthedocs.io/en/latest/index.html) for a description of the file outputs below.

```
qmri_postproc/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/  
            |__ SUBSES_desc-AsegROIs_scalarstats.json
            |__ SUBSES_desc-AsegROIs_scalarstats.tsv
            |__ SUBSES_desc-BilateralAsegROIs_scalarstats.json
            |__ SUBSES_desc-BilateralAsegROIs_scalarstats.tsv
            |__ SUBSES_desc-RegistrationQCAid.json
            |__ SUBSES_desc-RegistrationQCAid.png
            |__ SUBSES_space-QALAS_desc-aseg_dseg.nii.gz
            |__ SUBSES_space-T2w_desc-QALAS_T2map.json
            |__ SUBSES_space-T2w_desc-QALAS_T2map.nii.gz
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## QSIPrep (`qsiprep/`) 
The QSIPrep pipeline is used for preprocessing the HBCD diffusion-weighted MRI (dMRI) data. Preprocessing includes head motion correction, susceptibility distortion correction, MP-PCA denoising, coregistration to T1w images, ANTS spatial normalization, and tissue segmentation. The QSIPrep derivatives are then passed to [QSIRecon](#qsirecon) for reconstruction. Please see a full description of this pipeline on their [webpage](https://qsiprep.readthedocs.io/en/latest/). 
```
qsiprep/
|__ sub-<label>/
    |__ log/
    |__ ses-<label>/
        |__ anat/
        |   |__ SUBSES_from-ACPC_to-MNIInfant+1_mode-image_xfm.h5
        |   |__ SUBSES_from-ACPC_to-anat_mode-image_xfm.mat
        |   |__ SUBSES_from-MNIInfant+1_to-ACPC_mode-image_xfm.h5
        |   |__ SUBSES_from-anat_to-ACPC_mode-image_xfm.mat
        |   |__ SUBSES_from-orig_to-anat_mode-image_xfm.txt
        |   |__ SUBSES_space-ACPC_desc-aseg_dseg.nii.gz
        |   |__ SUBSES_space-ACPC_desc-brain_mask.nii.gz
        |   |__ SUBSES_space-ACPC_desc-preproc_T2w.json
        |   |__ SUBSES_space-ACPC_desc-preproc_T2w.nii.gz
        |   |__ SUBSES_space-ACPC_dseg.nii.gz
        |
        |__ dwi/
        |   |__ SUBSES_desc-confounds_timeseries.tsv
        |   |__ SUBSES_space-ACPC_desc-brain_mask.nii.gz
        |   |__ SUBSES_space-ACPC_desc-image_qc.csv
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.b
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.b_table.txt
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.bval
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.bvec
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.json
        |   |__ SUBSES_space-ACPC_desc-preproc_dwi.nii.gz
        |   |__ SUBSES_space-ACPC_desc-slice_qc.json
        |   |__ SUBSES_space-ACPC_dwiref.nii.gz
        |   |__ SUBSES_space-ACPC_model-eddy_stat-cnr_dwimap.json
        |   |__ SUBSES_space-ACPC_model-eddy_stat-cnr_dwimap.nii.gz
        |__ figures/
        |__ SUBSES.html
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder structure visual.*

## QSIRecon 
QSIPrep derivatives are passed to QSIRecon for reconstruction, including ODF/FOD reconstruction, tractography, Fixel estimation, and regional connectivity. The data are processed using a variety of methods and models (e.g. [Dipy](https://dipy.org/), [MRTrix](https://www.mrtrix.org/), [DSI Studio](https://dsi-studio.labsolver.org/), etc). Please see the [QSIRecon webpage](https://qsirecon.readthedocs.io/en/latest/) for a details.

```
derivatives/ 
|__ qsirecon/
|  |__ log/
|
|__ qsirecon-*/
    |__ sub-<label>/
        |__ ses-<label>/
            |__ dwi/
            |__ figures/
            |__ SUBSES.html    
```    
Though not displayed below, note that all `dwimap.nii.gz` files have associated JSON files (*see [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder trees*).

### Dipy (`qsirecon-DIPYDKI/`)
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;PARAM&gt;</b> label values: 
  <code>ad</code>, <code>ak</code>, <code>kfa</code>, <code>md</code>, 
  <code>mk</code>, <code>mkt</code>, <code>rd</code>, <code>rk</code>
</p>
```
dwi/
 |__ SUBSES_space-ACPC_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-dki_param-<PARAM>_dwimap.nii.gz (+JSON)
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-tensor_param-fa_dwimap.nii.gz (+JSON)
```

### DSI Studio (`qsirecon-DSIStudio/`)
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;PARAM&gt;</b> label values: 
  <code>ad</code>, <code>fa</code>, <code>ha</code>, <code>md</code>, 
  <code>rd</code>, <code>txx</code>, <code>txy</code>, <code>tyy</code>,
  <code>tyz</code>, <code>tzz</code>
</p>
```
dwi/
 |__ SUBSES_space-ACPC_bundle-AssociationHippocampusAlveusR_streamlines.tck.gz
 |__ SUBSES_space-ACPC_bundle-AssociationUncinateFasciculusR_streamlines.tck.gz
 |__ SUBSES_space-ACPC_bundle-ProjectionBasalGangliaCorticostriatalTractR_streamlines.tck.gz
 |__ SUBSES_space-ACPC_bundles-DSIStudio_<scalar|tdi>stats.tsv
 |__ SUBSES_space-ACPC_bundlestats.csv
 |__ SUBSES_space-ACPC_dwimap.fib.gz
 |__ SUBSES_space-ACPC_mapping.map.gz
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-gqi_param-<gfa|iso|qa>_dwimap.nii.gz (+JSON)
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-rdi_param-<rd1|rd2>_dwimap.nii.gz (+JSON)
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-tensor_param-<PARAM>_dwimap.nii.gz (+JSON)
```

### TORTOISE (`qsirecon-TORTOISE_model-<MAPMRI|tensor>/`)
The [TORTOISE](https://github.com/QMICodeBase/TORTOISEV4) software calculates MAPMRI and Tensor fits and scalar maps, output to derivative folders `qsirecon-TORTOISE_model-MAPMRI/` and `qsirecon-TORTOISE_model-tensor/`, respectively, with matching folder structures:

<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;MAP-PARAM&gt;</b> label values: <code>ng</code>, <code>ngpar</code>, <code>ngperp</code>, <code>pa</code>, <code>path</code>, <code>rtap</code>, <code>rtop</code>, <code>rtpp</code></p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;"><b style="color: #0077cc;">&lt;TENSOR-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>am</code>, <code>fa</code>, <code>li</code>, <code>rd</code></p>
```
dwi/
 |__ SUBSES_space-ACPC_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-mapmri_param-<MAP-PARAM>_dwimap.nii.gz (+JSON)
 |__ SUBSES_space-<ACPC|MNIInfant+1>_model-tensor_param-<TENSOR-PARAM>_dwimap.nii.gz (+JSON)
```

## SyMRI (`symri/`)
[SyMRI](https://syntheticmr.com/products/symri-neuro/) is proprietary software for quantitative MRI. For HBCD it is used to generate synthetic contrast weighted images derived from measures of the absolute properties of [QALAS](https://pubmed.ncbi.nlm.nih.gov/25526880/) brain images. These outputs are then minimally preprocessed by [qMRI Postproc](#qmri-postproc-qmri_postproc). Files include synthetic T1w and T2w images (`SUBSES_acq-QALAS_<T1w|T2w>.nii.gz`), derived relaxometry maps (`SUBSES_acq-QALAS_T2map.nii.gz`).
```
symri/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/
            |__ SUBSES_acq-QALAS_T1w.nii.gz
            |__ SUBSES_acq-QALAS_T1w.json
            |__ SUBSES_acq-QALAS_T2map.nii.gz
            |__ SUBSES_acq-QALAS_T2map.json
            |__ SUBSES_acq-QALAS_T2w.nii.gz
            |__ SUBSES_acq-QALAS_T2w.json
            |__ SUBSES_acq-QALAS_desc-SymriContainer.log
```
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder tree above.*

## XCP-D (`xcp_d/`)
XCP-D performs functional MRI post-processing and noise regression from Infant-fMRIPrep derivatives. Please see the [XCP-D webpage](https://xcp-d.readthedocs.io/en/latest/) to learn more and read details about the output file types.

<details open>
<summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltSEG&gt</b> label values: 4S1056Parcels, 4S156Parcels, 4S256Parcels, 4S356Parcels, 4S456Parcels, 4S556Parcels, 4S656Parcels, 4S756Parcels, 4S856Parcels, 4S956Parcels, Glasser, Gordon, HCP, MIDB, MyersLabonte, Tian</li>
    <li><b>SUBSES-(F)RUN</b>: For brevity, the BIDS entities below are replaced with the indicated strings:
        <ul>
        <li><code>sub-&lt;label&gt;_ses-&lt;label&gt;_run-&lt;label&gt;</code> ▸ <code>SUBSES-RUN</code></li>
        <li><code>sub-&lt;label&gt;_ses-&lt;label&gt;_task-rest_dir-PA_run-&lt;label&gt;</code> ▸ <code>SUBSES-FRUN</code></li>
        </ul>
    </li>
    <li><b>Functional JSONs</b> are not displayed below, however corresponding JSONs should exist for all files except <code>.hdf5</code> and <code>*linc_qc.tsv</code></li>
  </ul>
</details>
```
xcp_d/
|_ sub-<label>/
|  |_ ses-<label>/
|     |_ anat/
|     |  |__ SUBSES-RUN_space-MNI152NLin6Asym_desc-preproc_T2w.nii.gz
|     |  |__ SUBSES-RUN_space-fsLR_seg-<SEG>_stat-mean_desc-curv_morph.tsv
|     |  |__ SUBSES-RUN_space-fsLR_seg-<SEG>_stat-mean_desc-sulc_morph.tsv
|     |  |__ SUBSES-RUN_space-fsLR_seg-<SEG>_stat-mean_desc-thickness_morph.tsv
|     |
|     |_ func/
|     |  |__ SUBSES_task-rest_desc-abcc_qc.hdf5 # No json
|     |  |__ SUBSES_task-rest_<motion|outliers>.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_desc-denoised_bold.dtseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|     |  |__ SUBSES-FRUN_desc-abcc_qc.hdf5 # No json
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_desc-linc_qc.tsv # No json
|     |  |__ SUBSES-FRUN_<motion|design|outliers>.tsv
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_desc-denoised_bold.dtseries.nii
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_stat-alff_boldmap.dscalar.nii
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_stat-alff_desc-smooth_boldmap.dscalar.nii
|     |  |__ SUBSES-FRUN_space-fsLR_den-91k_stat-reho_boldmap.dscalar.nii
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_den-91k_stat-coverage_boldmap.pscalar.nii
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_stat-alff_bold.tsv
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_stat-coverage_bold.tsv
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|     |  |__ SUBSES-FRUN_space-fsLR_seg-<SEG>_stat-reho_bold.tsv
|     |
|     |_ figures/
|
|_ sub-<label>_ses-<label>_executive_summary.html
```
