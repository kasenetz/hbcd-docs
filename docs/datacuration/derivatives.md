# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the processing pipelines. Here is the higher-level folder structure and in each section below we explain the session-level file and folder contents for each pipeline.

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
            |__ ses-<label>/
                |__ anat/
                |__ func/       
                |__ figures/    
```

## BIBSNet (`bibsnet/`)

BIBSNet outputs brain segmentations and masks in native T1w and T2w space as well as `volumes.tsv` files with ROI volume statistics. Additional details can be found [here](https://bibsnet.readthedocs.io/en/latest/outputs/).

```
anat/
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.json
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.tsv
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.json            
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.nii.gz
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.json
```



## HBCD-Motion (`hbcd_motion/`)
The HBCD-Motion pipeline is used to process the HBCD Axivity Ax6 sensor recordings of infant leg movements across 72 continuous hours. Please see a full description of the output files on their webpage [here](https://hbcd-motion-postproc.readthedocs.io/en/latest/outputs.html#outputs).

```
motion/
|__ Kinematics/
|   |__ sub-<label>_ses-<label>_desc-kinematics_recording-20_motion.json
|   |__ sub-<label>_ses-<label>_desc-kinematics_recording-25_motion.json
|
|__ PA/
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-accelerationPA_BOUTS.tsv
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-accelerationPA_LOG.txt
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-accelerationPA_RAW.tsv
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-accelerationPA_SUMMARY.json
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-jerkPA_BOUTS.tsv
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-jerkPA_LOG.txt
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-jerkPA_RAW.tsv
|   |__ sub-<label>_ses-<label>_leg-<left|right>_desc-jerkPA_SUMMARY.json
|
|__ PARAMETERS.json
|__ sub-<label>_ses-<label>_leg-<left|right>_desc-calibrated_recording-20_motion.tsv
```

## HBCD-MADE (`made/`)
HBCD-MADE produces preprocessed EEG derivatives. Please see the [HBCD-MADE webpage](https://docs-hbcd-made.readthedocs.io/en/latest/expected_outputs.html) for a full explanation of the derivative files displayed below.

*NOTE:`TASK` field options include `FACE`, `MMN`, `RS`, and `VEP`*
```
eeg/
|__ filtered_data/
|   |__ sub-<label>_ses-<label>_task-<TASK>_acq-eeg_eeg_filtered_data.fdt
|   |__ sub-<label>_ses-<label>_task-<TASK>_acq-eeg_eeg_filtered_data.set
|
|__ ica_data/
|   |__ sub-<label>_ses-<label>_adjust_report
|   |__ sub-<label>_ses-<label>_ica_data.fdt
|   |__ sub-<label>_ses-<label>_ica_data.set
| 
|__ merged_data/
|   |__ sub-<label>_ses-<label>_merged.fdt
|   |__ sub-<label>_ses-<label>_merged.json
|   |__ sub-<label>_ses-<label>_merged.set
| 
|__ processed_data/
|   |__ sub-<label>_01_Topo_Standard_MMN.jpg
|   |__ sub-<label>_01_Topo_Upright_FACE.jpg
|   |__ sub-<label>_01_Topo_VEP.jpg
|   |__ sub-<label>_02_Topo_Inverted_FACE.jpg
|   |__ sub-<label>_02_Topo_PreDeviant_MMN.jpg
|   |__ sub-<label>_03_Topo_Deviant_MMN.jpg
|   |__ sub-<label>_03_Topo_Object_FACE.jpg
|   |__ sub-<label>_04_DiffTopo_Dev_Vs_Sta_MMN.jpg
|   |__ sub-<label>_04_Topo_Upright2_FACE.jpg
|   |__ sub-<label>_05_DiffTop_Inv_Vs_Upr_FACE.jpg
|   |__ sub-<label>_05_DiffTopo_Dev_Vs_Pre_MMN.jpg
|   |__ sub-<label>_06_DiffTopo_Obj_Vs_Up2_FACE.jpg
|   |__ sub-<label>_DiffERP_oz_FACE.jpg
|   |__ sub-<label>_DiffERP_t7t8_MMN.jpg
|   |__ sub-<label>_ERP_oz_FACE.jpg    
|   |__ sub-<label>_ERP_oz_VEP.jpg
|   |__ sub-<label>_ERP_t7t8_MMN.jpg
|   |__ sub-<label>_PSD_AllCh_Avg.jpg
|   |__ sub-<label>_PSD_AllCh.jpg
|   |__ sub-<label>_PSD_ROI.jpg
|   |__ sub-<label>_ses-<label>_task-<FACE|MMN|VEP>_ERP-summaryStats.csv
|   |__ sub-<label>_ses-<label>_task-<FACE|MMN|VEP>_ERP-trialMeasures.csv
|   |__ sub-<label>_ses-<label>_task-RS_Power-summaryStats.csv
| 
|__ sub-<label>_ses-<label>_acq-eeg_MADE_preprocessing_report.csv
|__ sub-<label>_ses-<label>_task-<TASK>_acq-eeg_eeg_MADE_specification.json
```


## MRIQC (`mriqc/`)
MRIQC extracts no-reference IQMs (image quality metrics) from structural (T1w and T2w) and functional MRI (magnetic resonance imaging) data (contained in the JSON files under `anat/` and `func/`) and also generates visual html report files. Please refer to the [MRIQC webpage](https://mriqc.readthedocs.io/en/latest/about.html) to read details about the outputs displayed below.
```
anat/
|   |__ sub-<label>_ses-<label>_run-<label>_T1w.json
|   |__ sub-<label>_ses-<label>_run-<label>_T2w.json
|
func/
|   |__ sub-<label>_ses-<label>_task-rest_dir-<label>_run-<label>_bold.json
|
sub-<label>_ses-<label>_run-<label>_T1w.html
sub-<label>_ses-<label>_run-<label>_T2w.html
sub-<label>_ses-<label>_task-rest_dir-<label>_run-<label>_bold.html
sub-<label>_ses-<label>_dir-<label>_run-<label>_bold.html
```

## Infant-fMRIPrep (`nibabies/`) 🚧
Infant-fMRIPrep (also known as NiBabies) outputs from minimal structural and functional MRI processing include include visual quality assessment reports, preprocessed derivatives, and confounds to be used for denoising in subsequent processing procedures. Please see their webpage [here](https://nibabies.readthedocs.io/en/latest/outputs.html) for a detailed description of the file outputs. For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar JSON files are not included below. Also note that files may have additional BIDS entities including `dir-<label>` (to specify its derivation from data acquired in the `AP` or `PA` phase encoding directions) or `run-<label>` as appropriate. 

- *Labels for `SPACE` (`space-<SPACE>`) include `MNI152NLin6Asym_res-2` and `T2w`*
- *Labels for `FMAPID` (`fmapid<FMAPID>`) include `auto00000`, `auto00001`, `auto00002`, `auto00003`, and `auto00004`*

```
anat/
|__ sub-<label>_ses-<label>_desc-<aseg|aparcaseg>_dseg.nii.gz
|__ sub-<label>_ses-<label>_desc-<brain|ribbon>_mask.nii.gz
|__ sub-<label>_ses-<label>_desc-preproc_<T1w|T2w>.nii.gz
|__ sub-<label>_ses-<label>_dseg.nii.gz
|__ sub-<label>_ses-<label>_from-fsnative_to-T2w_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_from-T2w_to-fsnative_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_from-MNI152NLin6Asym_to-T2w_mode-image_xfm.h5
|__ sub-<label>_ses-<label>_from-MNIInfant+<1|2|3|4>_to-T2w_mode-image_xfm.h5
|__ sub-<label>_ses-<label>_from-T2w_to-MNIInfant+<1|2|3|4>_mode-image_xfm.h5
|__ sub-<label>_ses-<label>_hemi-<L|R>_curv.shape.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_desc-reg_sphere.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_inflated.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_midthickness.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_pial.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_space-dHCP_desc-reg_sphere.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_space-dhcpAsym_desc-reg_sphere.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_space-fsaverage_desc-reg_sphere.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_sphere.surf.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_sulc.shape.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_thickness.shape.gii
|__ sub-<label>_ses-<label>_hemi-<L|R>_white.surf.gii
|__ sub-<label>_ses-<label>_label-<CSF|GM|WM>_probseg.nii.gz
|__ sub-<label>_ses-<label>_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
|__ sub-<label>_ses-<label>_space-fsLR_den-91k_<curv|sulc|thickness>.json
|__ sub-<label>_ses-<label>_space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_space-MNI152NLin6Asym_res-2_desc-preproc_T2w.nii.gz
|__ sub-<label>_ses-<label>_space-<SPACE>_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-<SPACE>_label-<CSF|GM|WM>_probseg.nii.gz
|__ sub-<label>_ses-<label>_space-T2w_desc-<aparcaseg|aseg>_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-T2w_desc-ribbon_mask.nii.gz
|
fmap/
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-coeff_fieldmap.nii.gz
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-epi_fieldmap.nii.gz
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-preproc_fieldmap.nii.gz
|
func/
|__ sub-<label>_ses-<label>_task-rest_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-confounds_timeseries.tsv
|__ sub-<label>_ses-<label>_task-rest_from-scanner_to-boldref_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-scanner_to-T1w_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-T1w_to-scanner_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_den-91k_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-aparcaseg_dseg.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-aseg_dseg.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-preproc_bold.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-T1w_desc-goodvoxels_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-coreg_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-hmc_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-preproc_bold.nii.gz
|__ sub-<label>_ses-<label>_task-rest_from-boldref_to-<FMAPID>_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-boldref_to-T2w_mode-image_desc-coreg_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-orig_to-boldref_mode-image_desc-hmc_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_hemi-<L|R>_space-fsnative_bold.func.gii
|__ sub-<label>_ses-<label>_task-rest_space-<SPACE>_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-<SPACE>_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-<SPACE>_desc-preproc_bold.nii.gz
|
figures/
```

## OSPREY-BIDS (`osprey/`) 
OSPREY-BIDS is the BIDS extension to the OSPREY pipeline used to process HBCD magnetic resonance spectroscopy (MRS) data. The `HERCULES` and `unedited` folders have matching structures, so only one is displayed below. For readability, the `jpg`/`png` images under the figures folders are not listed. Also note that filenames may additionally include `run-<label>`. Please see their [webpage](https://osprey-bids.readthedocs.io/en/latest/index.html) for a detailed explanation of these outputs.
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
|   |__ sub-<label>-report.html
|
|__ SegMaps/
|   |__ TissueFractions_Voxel_1.<tsv|json>
|   |__ sub-<label>_ses-<label>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-CSF.nii.gz
|   |__ sub-<label>_ses-<label>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-GM.nii.gz
|   |__ sub-<label>_ses-<label>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-Tha.nii.gz
|   |__ sub-<label>_ses-<label>_acq-hercules_svs.nii_space-scanner_Voxel-1_label-WM.nii.gz
|
|__ VoxelMasks/
|   |__ sub-<label>_ses-<label>_acq-hercules_svs_space-scanner_mask.nii.gz
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
|__ sub-<label>_ses-<label>_desc-AsegROIs_scalarstats.json
|__ sub-<label>_ses-<label>_desc-AsegROIs_scalarstats.tsv
|__ sub-<label>_ses-<label>_desc-BilateralAsegROIs_scalarstats.json
|__ sub-<label>_ses-<label>_desc-BilateralAsegROIs_scalarstats.tsv
|__ sub-<label>_ses-<label>_desc-RegistrationQCAid.json
|__ sub-<label>_ses-<label>_desc-RegistrationQCAid.png
|__ sub-<label>_ses-<label>_space-QALAS_desc-aseg_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-T2w_desc-QALAS_T2map.json
|__ sub-<label>_ses-<label>_space-T2w_desc-QALAS_T2map.nii.gz
```

## QSIPrep (`qsiprep/`) 
The QSIPrep pipeline is used for preprocessing the HBCD diffusion-weighted MRI (dMRI) data. Preprocessing includes head motion correction, susceptibility distortion correction, MP-PCA denoising, coregistration to T1w images, ANTS spatial normalization, and tissue segmentation. The QSIPrep derivatives are then passed to [QSIRecon](#qsirecon-qsirecon-) for reconstruction. Please see a full description of this pipeline on their [webpage](https://qsiprep.readthedocs.io/en/latest/). Below, for readability, the `figures/` folder contents (contains all `svg` and `gif` files rendered in the visual report) are not listed. Actual filenames may also include `run-<label>`. 

```
anat/
|__ sub-<label>_desc-aseg_dseg.nii.gz
|__ sub-<label>_desc-brain_mask.nii.gz
|__ sub-<label>_desc-preproc_T2w.nii.gz
|__ sub-<label>_dseg.nii.gz
|__ sub-<label>_from-MNI152NLin2009cAsym_to-T1w_mode-image_xfm.h5
|__ sub-<label>_from-T1w_to-MNI152NLin2009cAsym_mode-image_xfm.h5
|__ sub-<label>_from-T1wACPC_to-T1wNative_mode-image_xfm.mat
|__ sub-<label>_from-T1wNative_to-T1wACPC_mode-image_xfm.mat
|__ sub-<label>_ses-<label>_from-orig_to-T1w_mode-image_xfm.txt
|
dwi/
|__ sub-<label>_ses-<label>_desc-ImageQC_dwi.csv
|__ sub-<label>_ses-<label>_desc-SliceQC_dwi.json
|__ sub-<label>_ses-<label>_dwiqc.json
|__ sub-<label>_ses-<label>_space-T1w_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_space-T1w_desc-eddy_cnr.nii.gz
|__ sub-<label>_ses-<label>_space-T1w_desc-preproc_dwi.b
|__ sub-<label>_ses-<label>_space-T1w_desc-preproc_dwi.bval
|__ sub-<label>_ses-<label>_space-T1w_desc-preproc_dwi.bvec
|__ sub-<label>_ses-<label>_space-T1w_desc-preproc_dwi.nii.gz
|__ sub-<label>_ses-<label>_space-T1w_desc-preproc_dwi.txt
|__ sub-<label>_ses-<label>_space-T1w_dwiref.nii.gz
|
figures/
```

## QSIRecon (`qsirecon/`) 🚧 
QSIPrep derivatives are passed to QSIRecon for reconstruction, including ODF/FOD reconstruction, tractography, Fixel estimation and regional connectivity. Please see their [webpage](https://qsirecon.readthedocs.io/en/latest/) for a detailed description of the derivatives.

## SyMRI (`symri/`)
[SyMRI](https://syntheticmr.com/products/symri-neuro/) is proprietary software for quantitative MRI. For HBCD it is used to generate synthetic contrast weighted images derived from measures of the absolute properties of [QALAS](https://pubmed.ncbi.nlm.nih.gov/25526880/) brain images. These outputs are then minimally preprocessed by [qMRI Postproc](#qmri-postproc-qmri_postproc). Files include synthetic T1w and T2w images (`sub-<label>_ses-<label>_acq-QALAS_<T1w|T2w>.nii.gz`), derived relaxometry maps (`sub-<label>_ses-<label>_acq-QALAS_T2map.nii.gz`).

```
anat/
|__ sub-<label>_ses-<label>_acq-QALAS_T1w.nii.gz
|__ sub-<label>_ses-<label>_acq-QALAS_T1w.json
|__ sub-<label>_ses-<label>_acq-QALAS_T2map.nii.gz
|__ sub-<label>_ses-<label>_acq-QALAS_T2map.json
|__ sub-<label>_ses-<label>_acq-QALAS_T2w.nii.gz
|__ sub-<label>_ses-<label>_acq-QALAS_T2w.json
|__ sub-<label>_ses-<label>_acq-QALAS_desc-SymriContainer.log

```

## XCP-D (`xcpd_d/`) 🚧 

For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar JSON files are not included below. Also note that files may have additional BIDS entities including `dir-<label>` (to specify its derivation from data acquired in the `AP` or `PA` phase encoding directions) or `run-<label>` as appropriate. 

*Labels for `SEG` (`seg-<SEG>`) include: `4S1056Parcels`, `4S156Parcels`, `4S256Parcels`, `4S356Parcels`, `4S456Parcels`, `4S556Parcels`, `4S656Parcels`, `4S756Parcels`, `4S856Parcels`, `4S956Parcels`, `Glasser`, `Gordon`, `MIDB`,`MyersLabonte`, and `Tian`*

```
anat/
|__ sub-<label>_ses-<label>_space-<space>_desc-preproc_<T1w|T2w>.nii.gz
|__ sub-<label>_ses-<label>_space-<space>_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
|__ sub-<label>_ses-<label>_space-fsLR_seg-<SEG>_stat-mean_desc-curv_morph.tsv
|__ sub-<label>_ses-<label>_space-fsLR_seg-<SEG>_stat-mean_desc-sulc_morph.tsv
|__ sub-<label>_ses-<label>_space-fsLR_seg-<SEG>_stat-mean_desc-thickness_morph.tsv
|__ sub-<label>_ses-<label>_space-MNI152NLin6Asym_desc-preproc_T2w.nii.gz
|__ sub-<label>_ses-<label>_space-MNI152NLin6Asym_dseg.nii.gz
|
func/
|__ sub-<label>_ses-<label>_task-rest_desc-abcc_qc.hdf5
|__ sub-<label>_ses-<label>_task-rest_<motion|outliers|design>.tsv
|__ sub-<label>_ses-<label>_task-rest_space-<label>_atlas-<label>_den-91k_stat-pearsoncorrelation_boldmap.pconn.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_atlas-<label>_den-91k_timeseries.ptseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_atlas-<label>_measure-pearsoncorrelation_conmat.tsv
|__ sub-<label>_ses-<label>_task-rest_space-<label>_atlas-<label>_stat-pearsoncorrelation_relmat.tsv
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_desc-denoised_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_desc-interpolated_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_desc-linc_qc.csv
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_stat-alff_boldmap.dscalar.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_stat-alff_desc-smooth_boldmap.dscalar.nii
|__ sub-<label>_ses-<label>_task-rest_space-<label>_den-91k_stat-reho_boldmap.dscalar.nii
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-coverage_boldmap.pscalar.nii
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_stat-alff_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_stat-coverage_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_seg-<SEG>_stat-reho_bold.tsv
|
figures/
```
