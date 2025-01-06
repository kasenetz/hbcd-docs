# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the [processing pipelines](../processing/pipelines.md). A description of HBCD-specific processing parameters used for each pipeline is available on the [HBCD Processing](https://hbcd-cbrain-processing.readthedocs.io/latest/) webpage. The following sections outline the session-level file and folder contents for each pipeline. 

```
root/
|__ derivatives/ 
    |__ bibsnet/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/
    |
    |__ hbcd_motion/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ motion/
    |
    |__ made/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ eeg/
    |
    |__ mriqc/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/
    |
    |__ nibabies/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/
    |           |__ fmap/
    |           |__ func/       
    |           |__ figures/
    | 
    |__ osprey/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ HERCULES/
    |           |__ unedited/
    |
    |__ qmri_postproc/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/    
    |
    |__ qsiprep/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/    
    |           |__ dwi/      
    |           |__ figures/        
    |
    |__ qsirecon/
    |
    |__ symri/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/
    |    
    |__ xcp_d/
        |__ sub-<label>/
        |   |__ ses-<label>/
        |       |__ anat/
        |       |__ func/       
        |       |__ figures/    
        |__ sub-<label>_ses-<label>_executive_summary.html
```

## BIBSNet (`bibsnet/`)

BIBSNet outputs brain segmentations and masks in native T1w and T2w space as well as `volumes.tsv` files with ROI volume statistics. Additional details can be found [here](https://bibsnet.readthedocs.io/en/latest/outputs/).

```
anat/
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_dseg.nii.gz
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_dseg.json
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_volumes.tsv
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_volumes.json            
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_brain-mask.nii.gz
|__ sub-<L>_ses-<L>_space-<T1w|T2w>_desc-aseg_brain-mask.json
```

## HBCD-Motion (`hbcd_motion/`)
The HBCD-Motion pipeline is used to process the HBCD Axivity Ax6 sensor recordings of infant leg movements across 72 continuous hours. Please see a full description of the output files on their webpage [here](https://hbcd-motion-postproc.readthedocs.io/en/latest/outputs.html#outputs).

```
motion/
|__ Kinematics/
|   |__ sub-<L>_ses-<L>_desc-kinematics_recording-20_motion.json
|   |__ sub-<L>_ses-<L>_desc-kinematics_recording-25_motion.json
|
|__ PA/
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-accelerationPA_BOUTS.tsv
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-accelerationPA_LOG.txt
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-accelerationPA_RAW.tsv
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-accelerationPA_SUMMARY.json
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-jerkPA_BOUTS.tsv
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-jerkPA_LOG.txt
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-jerkPA_RAW.tsv
|   |__ sub-<L>_ses-<L>_leg-<left|right>_desc-jerkPA_SUMMARY.json
|
|__ PARAMETERS.json
|__ sub-<L>_ses-<L>_leg-<left|right>_desc-calibrated_recording-20_motion.tsv
```

## HBCD-MADE (`made/`)
HBCD-MADE produces preprocessed EEG derivatives. Please see the [HBCD-MADE webpage](https://docs-hbcd-made.readthedocs.io/en/latest) for a full explanation of the derivative files displayed below.

*NOTE:`TASK` field options include `FACE`, `MMN`, `RS`, and `VEP`*
```
eeg/
|__ filtered_data/
|   |__ sub-<L>_ses-<L>_task-<TASK>_acq-eeg_desc-filtered_eeg.fdt
|   |__ sub-<L>_ses-<L>_task-<TASK>_acq-eeg_desc-filtered_eeg.set
|
|__ ica_data/
|   |__ sub-<L>_ses-<L>_adjustReport.txt
|   |__ sub-<L>_ses-<L>_desc-mergedICA_eeg.fdt
|   |__ sub-<L>_ses-<L>_desc-mergedICA_eeg.set
| 
|__ merged_data/
|   |__ sub-<L>_ses-<L>_desc-merged_eeg.fdt
|   |__ sub-<L>_ses-<L>_desc-merged_eeg.json
|   |__ sub-<L>_ses-<L>_desc-merged_eeg.set
| 
|__ processed_data/
|   |__ sub-<L>_task-MMN_desc-standard_topo.jpg
|   |__ sub-<L>_task-FACE_desc-upright_topo.jpg
|   |__ sub-<L>_task-VEP_topo.jpg
|   |__ sub-<L>_task-FACE_desc-inverted_topo.jpg
|   |__ sub-<L>_task-MMN_desc-preDeviant_topo.jpg
|   |__ sub-<L>_task-MMN-desc-Deviant_topo.jpg
|   |__ sub-<L>_task-FACE_desc-object_topo.jpg
|   |__ sub-<L>_task-MMN_desc-diffDevVsSta_topo.jpg
|   |__ sub-<L>_task-FACE_desc-upright2_topo.jpg
|   |__ sub-<L>_task-FACE_desc-diffInvVsUpr_topo.jpg
|   |__ sub-<L>_task-MMN_desc-diffDevVsPre_topo.jpg
|   |__ sub-<L>_task-FACE_desc-diffObjVsUp2_topo.jpg
|   |__ sub-<L>_task-FACE_desc-Oz_diffERP.jpg
|   |__ sub-<L>_task-MMN_desc-T7t8_diffERP.jpg
|   |__ sub-<L>_task-FACE_desc-oz_ERP.jpg 
|   |__ sub-<L>_task-VEP_desc-oz_ERP.jpg
|   |__ sub-<L>_task-MMN_desc-t7t8_ERP.jpg
|   |__ sub-<L>_task-RS_desc-allChAvg_PSD.jpg
|   |__ sub-<L>_task-RS_desc-allCh_PSD.jpg
|   |__ sub-<L>_task-RS_desc-ROI_PSD.jpg
|   |__ sub-<L>_ses-<L>_task-<TASK>_ERPSummaryStats.csv
|   |__ sub-<L>_ses-<L>_task-<TASK>_ERPTrialMeasures.csv
|   |__ sub-<L>_ses-<L>_task-RS_powerSummaryStats.csv
| 
|__ sub-<L>_ses-<L>_acq-eeg_preprocessingReport.csv
|__ sub-<L>_ses-<L>_task-<TASK>_acq-eeg_specification.json
```


## MRIQC (`mriqc/`)
MRIQC extracts no-reference IQMs (image quality metrics) from structural (T1w and T2w) and functional MRI (magnetic resonance imaging) data (contained in the JSON files under `anat/` and `func/`) and also generates visual html report files. Please refer to the [MRIQC webpage](https://mriqc.readthedocs.io/en/latest/about.html) to read details about the outputs displayed below.
```
anat/
|__ sub-<L>_ses-<L>_run-<L>_T1w.json
|__ sub-<L>_ses-<L>_run-<L>_T2w.json
|
func/
|__ sub-<L>_ses-<L>_task-rest_dir-<L>_run-<L>_bold.json
|
sub-<L>_ses-<L>_run-<L>_T1w.html
sub-<L>_ses-<L>_run-<L>_T2w.html
sub-<L>_ses-<L>_task-rest_dir-<L>_run-<L>_bold.html
sub-<L>_ses-<L>_dir-<L>_run-<L>_bold.html
```

## Infant-fMRIPrep (`nibabies/`)
Infant-fMRIPrep (also known as NiBabies) outputs from minimal structural and functional MRI processing include visual quality assessment reports, preprocessed derivatives, and confounds to be used for denoising in subsequent processing procedures. Please see their webpage [here](https://nibabies.readthedocs.io/en/latest/outputs.html) for a detailed description of the file outputs. For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report, `sub-<L>_ses-<L>.html`) and sidecar JSON files are not included below. Also note that filenames may have additional BIDS entities including `run-<L>`.

- *Labels for `SPACE` (`space-<SPACE>`) include `MNI152NLin6Asym_res-2` and `T2w`*
- *Labels for `FMAPID` (`fmapid<FMAPID>`) include `auto00000`, `auto00001`, `auto00002`, `auto00003`, and `auto00004`*

```
anat/
|__ sub-<L>_ses-<L>__desc-preproc_T2w.nii.gz
|__ sub-<L>_ses-<L>__from-MNI152NLin6Asym_to-T2w_mode-image_xfm.h5
|__ sub-<L>_ses-<L>__from-MNIInfant+1_to-T2w_mode-image_xfm.h5
|__ sub-<L>_ses-<L>__from-T2w_to-MNI152NLin6Asym_mode-image_xfm.h5
|__ sub-<L>_ses-<L>__from-T2w_to-MNIInfant+1_mode-image_xfm.h5
|__ sub-<L>_ses-<L>__from-T2w_to-fsnative_mode-image_xfm.txt
|__ sub-<L>_ses-<L>__from-fsnative_to-T2w_mode-image_xfm.txt
|__ sub-<L>_ses-<L>__hemi-<L|R>_<inflated|midthickness|pial|sphere|white>.surf.gii
|__ sub-<L>_ses-<L>__hemi-<L|R>_space-<dhcpAsym|fsaverage>_desc-reg_sphere.surf.gii
|__ sub-<L>_ses-<L>__hemi-<L|R>_<curv|sulc|thickness>.shape.gii
|__ sub-<L>_ses-<L>__space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz
|__ sub-<L>_ses-<L>__space-MNI152NLin6Asym_res-2_desc-preproc_T2w.nii.gz
|__ sub-<L>_ses-<L>__space-MNI152NLin6Asym_res-2_dseg.nii.gz
|__ sub-<L>_ses-<L>__space-MNI152NLin6Asym_res-2_label-<CSF|GM|WM>_probseg.nii.gz
|__ sub-<L>_ses-<L>__space-T2w_desc-<aparcaseg|aseg>_dseg.nii.gz
|__ sub-<L>_ses-<L>__space-T2w_desc-ribbon_mask.nii.gz
|__ sub-<L>_ses-<L>__space-T2w_dseg.nii.gz
|__ sub-<L>_ses-<L>__space-T2w_label-<CSF|GM|WM>_probseg.nii.gz
|__ sub-<L>_ses-<L>__space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
|
fmap/
|__ sub-<L>_ses-<L>_fmapid-<FMAPID>_desc-coeff_fieldmap.nii.gz
|__ sub-<L>_ses-<L>_fmapid-<FMAPID>_desc-epi_fieldmap.nii.gz
|__ sub-<L>_ses-<L>_fmapid-<FMAPID>_desc-preproc_fieldmap.nii.gz
|
func/
|__ sub-<L>_ses-<L>_task-rest_dir-PA_desc-brain_mask.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_desc-confounds_timeseries.tsv
|__ sub-<L>_ses-<L>_task-rest_dir-PA_desc-coreg_boldref.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_desc-hmc_boldref.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_desc-preproc_bold.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_from-boldref_to-T2w_mode-image_desc-coreg_xfm.txt
|__ sub-<L>_ses-<L>_task-rest_dir-PA_from-boldref_to-auto00000_mode-image_xfm.txt
|__ sub-<L>_ses-<L>_task-rest_dir-PA_from-orig_to-boldref_mode-image_desc-hmc_xfm.txt
|__ sub-<L>_ses-<L>_task-rest_dir-PA_hemi-<L|R>_space-fsnative_bold.func.gii
|__ sub-<L>_ses-<L>_task-rest_dir-PA_space-<SPACE>_boldref.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_space-<SPACE>_desc-brain_mask.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_space-<SPACE>_desc-preproc_bold.nii.gz
|__ sub-<L>_ses-<L>_task-rest_dir-PA_space-fsLR_den-91k_bold.dtseries.nii
|
figures/
|
sub-<L>_ses-<L>.html
```

## OSPREY-BIDS (`osprey/`) 
OSPREY-BIDS is the BIDS extension to the OSPREY pipeline used to process HBCD magnetic resonance spectroscopy (MRS) data. The `HERCULES` and `unedited` folders have matching structures, so only one is displayed below. For readability, the `jpg`/`png` images under the figures folders are not listed. Also note that filenames may additionally include `run-<L>`. Please see their [webpage](https://osprey-bids.readthedocs.io/en/latest/index.html) for a detailed explanation of these outputs.
```
HERCULES/ 
|__ PreOspreyLocalizerReg/
|   |__ figures/*
|   |__ aalreference_seg_aligned_to_localizer.nii.gz
|   |__ c1reference_seg_aligned_to_localizer.nii.gz
|   |__ c2reference_seg_aligned_to_localizer.nii.gz
|   |__ c3reference_seg_aligned_to_localizer.nii.gz
|   |__ readme.txt
|   |__ reference_img_aligned_to_localizer.nii.gz
|   |__ reference_seg_aligned_to_localizer.nii.gz
|   |__ registration_summary.json
|   |__ transform_mat.npy
|
|__ QuantifyResults/
|   |__ diff<1|2>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_AlphaCorrWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_amplMets_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_CSFWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_rawWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_tCr_Voxel_1_Basis_1.<tsv|json>
|   |__ diff<1|2>_TissCorrWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_AlphaCorrWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_amplMets_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_CSFWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_rawWaterScaled_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_tCr_Voxel_1_Basis_1.<tsv|json>
|   |__ sum_TissCorrWaterScaled_Voxel_1_Basis_1.<tsv|json>
|
|__ Reports/
|   |__ reportFigures/*
|   |__ sub-<L>-report.html
|
|__ SegMaps/
|   |__ TissueFractions_Voxel_1.<tsv|json>
|   |__ sub-<L>_ses-<L>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-CSF.nii.gz
|   |__ sub-<L>_ses-<L>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-GM.nii.gz
|   |__ sub-<L>_ses-<L>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-Tha.nii.gz
|   |__ sub-<L>_ses-<L>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-WM.nii.gz
|
|__ VoxelMasks/
|   |__ sub-<L>_ses-<L>_acq-hercules_svs_space-scanner_mask.nii.gz
|
|__ LogFile.txt
|__ subject_names_and_excluded.<tsv|json>
|__ SummaryMRSinMRS.md
|__ QM_processed_spectra.<tsv|json>
|__ wrapper_settings.<mat|json>

```

## qMRI Postproc (`qmri_postproc/`)
This pipeline performs minimal post-processing for SyMRI synthetic images derived from QALAS acquisition. Please visit the [qMRI PostProc webpage](https://hbcd-symri-postproc.readthedocs.io/en/latest/index.html) for a description of the file outputs below.

```
anat/
|__ sub-<L>_ses-<L>_desc-AsegROIs_scalarstats.json
|__ sub-<L>_ses-<L>_desc-AsegROIs_scalarstats.tsv
|__ sub-<L>_ses-<L>_desc-BilateralAsegROIs_scalarstats.json
|__ sub-<L>_ses-<L>_desc-BilateralAsegROIs_scalarstats.tsv
|__ sub-<L>_ses-<L>_desc-RegistrationQCAid.json
|__ sub-<L>_ses-<L>_desc-RegistrationQCAid.png
|__ sub-<L>_ses-<L>_space-QALAS_desc-aseg_dseg.nii.gz
|__ sub-<L>_ses-<L>_space-T2w_desc-QALAS_T2map.json
|__ sub-<L>_ses-<L>_space-T2w_desc-QALAS_T2map.nii.gz
```

## QSIPrep (`qsiprep/`) 
The QSIPrep pipeline is used for preprocessing the HBCD diffusion-weighted MRI (dMRI) data. Preprocessing includes head motion correction, susceptibility distortion correction, MP-PCA denoising, coregistration to T1w images, ANTS spatial normalization, and tissue segmentation. The QSIPrep derivatives are then passed to [QSIRecon](#qsirecon-qsirecon) for reconstruction. Please see a full description of this pipeline on their [webpage](https://qsiprep.readthedocs.io/en/latest/). Below, for readability, the `figures/` folder contents (contains all `svg` and `gif` files rendered in the visual report) are not listed. Actual filenames may also include `run-<L>`. 

```
anat/
|__ sub-<L>_desc-aseg_dseg.nii.gz
|__ sub-<L>_desc-brain_mask.nii.gz
|__ sub-<L>_desc-preproc_T2w.nii.gz
|__ sub-<L>_dseg.nii.gz
|__ sub-<L>_from-MNI152NLin2009cAsym_to-T1w_mode-image_xfm.h5
|__ sub-<L>_from-T1w_to-MNI152NLin2009cAsym_mode-image_xfm.h5
|__ sub-<L>_from-T1wACPC_to-T1wNative_mode-image_xfm.mat
|__ sub-<L>_from-T1wNative_to-T1wACPC_mode-image_xfm.mat
|__ sub-<L>_ses-<L>_from-orig_to-T1w_mode-image_xfm.txt
|
dwi/
|__ sub-<L>_ses-<L>_desc-ImageQC_dwi.csv
|__ sub-<L>_ses-<L>_desc-SliceQC_dwi.json
|__ sub-<L>_ses-<L>_dwiqc.json
|__ sub-<L>_ses-<L>_space-T1w_desc-brain_mask.nii.gz
|__ sub-<L>_ses-<L>_space-T1w_desc-eddy_cnr.nii.gz
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwi.b
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwi.bval
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwi.bvec
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwi.nii.gz
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwi.txt
|__ sub-<L>_ses-<L>_space-T1w_dwiref.nii.gz
|
figures/
```

## QSIRecon (`qsirecon/`)
QSIPrep derivatives are passed to QSIRecon for reconstruction, including ODF/FOD reconstruction, tractography, Fixel estimation and regional connectivity. Please see their [webpage](https://qsirecon.readthedocs.io/en/latest/) for a detailed description of the derivatives.

### qsirecon-DIPYDKI
*Labels for `MDP` (`mdp-<MDP>`) include `AD`, `AK`, `KFA`, `MD`, `MKT`, `MK`, `RD`, & `RK`*
```
dwi/
|__ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-dki_mdp-<MPD>_dwimap.nii.gz
|__ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-FA_dwimap.nii.gz
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-dki_mdp-<MDP>_dwimap.nii.gz
|__ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-tensor_mdp-FA_dwimap.nii.gz
```

### qsirecon-DSIStudio
- *Labels for `MDP` (`mdp-<MDP>`) include `ad`, `fa`, `ha`, `md`, & `rd`*
- *Labels for `MFP` (`mfp-<MFP>`) include `txx`, `txy`, `tyy`, `tyz`, & `tzz`*
- *Labels for `ASSOC` (`Association_<ASSOC>`) include `ArcuateFasciculus<L|R>`, `FrontalAslantTract<L|R>`, `InferiorFrontoOccipitalFasciculus<L|R>`, `InferiorLongitudinalFasciculus<L|R>`, `MiddleLongitudinalFasciculus<L|R>`, `ParietalAslantTract<L|R>`, `UncinateFasciculus<L|R>`, & `VerticalOccipitalFasciculus<L|R>`*
- *Labels for `PBG` (`ProjectionBasalGanglia_<PBG>`) include `FasciculusLenticularis<L|R>`, `FasciculusSubthalamicus<L|R>`, `Fornix<L|R>`, & `OpticRadiation<L|R>`*
- *Labels for `PB` (`ProjectionBrainstem_<PB>`) include `CorticospinalTract<L|R>` & `ReticularTract<L|R>`*

```
dwi/
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_fit-GQI_mdp-gfa_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_fit-GQI_mdp-iso_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-GQI_mdp-qa_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-RDI_mdp-rd<1|2>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<MPD>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-<MFP>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundle-Association_<ASSOC>_streamlines.tck
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundle-ProjectionBasalGanglia_<PBG>_streamlines.tck
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundle-ProjectionBrainstem_<PB>_streamlines.tck
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_tdistats.tsv
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundlestats.csv
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwimap.fib.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_fit-GQI_mdp-gfa_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_fit-GQI_mdp-iso_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_mapping.map.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-GQI_mdp-qa_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-RDI_mdp-rd<1|2>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-tensor_mdp-<MDP>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-tensor_mfp-<MFP>_dwimap.nii.gz
```

### qsirecon-NODDI
```
dwi/
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-icvf_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-isovf_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-od_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_dwimap.fib.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-NODDI_mfp-AMICOconfig_dwimap.pickle.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-noddi_mdp-<MDP>_dwimap.nii.gz
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-noddi_mfp-direction_dwimap.nii.gz
```

### qsirecon-TORTOISE_model-MAPMRI
- *Labels for `MDP` (`model-mapmri_mdp-<MDP>`) include `NG`, `NGpar`, `NGPerp`, `PA`, `PAth`, `RTAP`, `RTOP`, & `RTPP`*
- *Labels for `TMDP` (`model-tensor_mdp-<TMDP>`) include `ad`, `fa`, `li`, & `rd`*
```
dwi/
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-mapmri_mdp-<MDP>_dwimap.nii
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-AM_dwimap.nii
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-mapmri_mdp-<MDP>_dwimap.nii
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_model-tensor_mfp-AM_dwimap.nii
```

### qsirecon-TORTOISE_model-tensor
- *Labels for `TMDP` (`model-tensor_mdp-<TMDP>`) include `ad`, `fa`, `li`, & `rd`*
```
dwi/
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
|_ sub-<L>_ses-<L>_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-AM_dwimap.nii
|_ sub-<L>_ses-<L>_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
```



## SyMRI (`symri/`)
[SyMRI](https://syntheticmr.com/products/symri-neuro/) is proprietary software for quantitative MRI. For HBCD it is used to generate synthetic contrast weighted images derived from measures of the absolute properties of [QALAS](https://pubmed.ncbi.nlm.nih.gov/25526880/) brain images. These outputs are then minimally preprocessed by [qMRI Postproc](#qmri-postproc-qmri_postproc). Files include synthetic T1w and T2w images (`sub-<L>_ses-<L>_acq-QALAS_<T1w|T2w>.nii.gz`), derived relaxometry maps (`sub-<L>_ses-<L>_acq-QALAS_T2map.nii.gz`).

```
anat/
|__ sub-<L>_ses-<L>_acq-QALAS_T1w.nii.gz
|__ sub-<L>_ses-<L>_acq-QALAS_T1w.json
|__ sub-<L>_ses-<L>_acq-QALAS_T2map.nii.gz
|__ sub-<L>_ses-<L>_acq-QALAS_T2map.json
|__ sub-<L>_ses-<L>_acq-QALAS_T2w.nii.gz
|__ sub-<L>_ses-<L>_acq-QALAS_T2w.json
|__ sub-<L>_ses-<L>_acq-QALAS_desc-SymriContainer.log

```

## XCP-D (`xcp_d/`)
XCP-D performs functional MRI post-processing and noise regression from Infant-fMRIPrep derivatives. Please see the [XCP-D webpage](https://xcp-d.readthedocs.io/en/latest/) to learn more and read details about the output file types. Note that XCP-D as generates a visual summary report (`sub-<label>_ses-<label>_executive_summary.html`) located under `xcp-d/` as displayed in the folder structure at the top of the page.

For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar JSON files are not included below. Also note that files may have additional BIDS entities including `dir-<L>` (to specify its derivation from data acquired in the `AP` or `PA` phase encoding directions) or `run-<L>` as appropriate. 

*Labels for `SEG` (`seg-<SEG>`) include: `4S1056Parcels`, `4S156Parcels`, `4S256Parcels`, `4S356Parcels`, `4S456Parcels`, `4S556Parcels`, `4S656Parcels`, `4S756Parcels`, `4S856Parcels`, `4S956Parcels`, `Glasser`, `Gordon`, `MIDB`,`MyersLabonte`, and `Tian`*

```
anat/
|__ sub-<L>_ses-<L>_space-MNI152NLin6Asym_desc-preproc_T2w.nii.gz
|__ sub-<L>_ses-<L>_space-MNI152NLin6Asym_dseg.nii.gz
|__ sub-<L>_ses-<L>_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
|__ sub-<L>_ses-<L>_space-fsLR_seg-<SEG>_stat-mean_desc-curv_morph.tsv
|__ sub-<L>_ses-<L>_space-fsLR_seg-<SEG>_stat-mean_desc-sulc_morph.tsv
|__ sub-<L>_ses-<L>_space-fsLR_seg-<SEG>_stat-mean_desc-thickness_morph.tsv
|
func/
|__ sub-<L>_ses-<L>_task-rest_desc-abcc_qc.hdf5
|__ sub-<L>_ses-<L>_task-rest_<design|motion|outliers>.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_desc-denoised_bold.dtseries.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_desc-linc_qc.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_stat-alff_boldmap.dscalar.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_stat-alff_desc-smooth_boldmap.dscalar.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_den-91k_stat-reho_boldmap.dscalar.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-coverage_boldmap.pscalar.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_stat-alff_bold.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_stat-coverage_bold.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_stat-reho_bold.tsv
|__ sub-<L>_ses-<L>_task-rest_space-fsLR_seg-<SEG>_stat-pearsoncorrelation_relmat.tsv
|
figures/
```
