# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the processing pipelines. Here is the higher-level folder structure and in each section below we explain the file contents of each subject and session subfolder displayed.

```
root/
|__ derivatives/ 
    |__ bibsnet/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ anat/
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

```
anat/
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.nii.gz
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.json
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.tsv
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.json            
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.nii.gz
|__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.json
```

BIBSNet outputs brain segmentations and masks in native T1w and T2w space as well as `volumes.tsv` files with ROI volume statistics. Additional details can be found [here](https://bibsnet.readthedocs.io/en/latest/outputs/).

## HBCD-MADE (`made/`)

HBCD-MADE produces preprocessed EEG derivatives. Please see the [HBCD-MADE webpage](https://docs-hbcd-made.readthedocs.io/en/latest/expected_outputs.html) for a full explanation of the derivative files displayed below.

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
*NOTE:`TASK` field options include `FACE`, `MMN`, `RS`, and `VEP`*


## MRIQC (`mriqc/`)
Please refer to the [MRIQC webpage](https://mriqc.readthedocs.io/en/latest/about.html) to read details about the outputs provided in this release.
```
|__ anat/
|   |__ sub-<label>_ses-<label>_run-<label>_T1w.json
|   |__ sub-<label>_ses-<label>_run-<label>_T2w.json
|
|__ func/
|   |__ sub-<label>_ses-<label>_task-rest_dir-<label>_run-<label>_bold.json
|
|__ sub-<label>_ses-<label>_run-<label>_T1w.html
|__ sub-<label>_ses-<label>_run-<label>_T2w.html
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_run-<label>_bold.html
|__ sub-<label>_ses-<label>_dir-<label>_run-<label>_bold.html
```

## Infant-fMRIPrep (`nibabies/`)
Infant-fMRIPrep (also known as NiBabies) outputs from minimal structural and functional MRI processing include include visual quality assessment reports, preprocessed derivatives, and confounds to be used for denoising in subsequent processing procedures. Please see their webpage [here](https://nibabies.readthedocs.io/en/latest/outputs.html) for a detailed description of the file outputs. For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar JSON files are not included below. Also note that files may have additional BIDS entities including `dir-<label>` or `run-<label>` as appropriate. 

### anat/
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
```
```
fmap/
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-coeff_fieldmap.nii.gz
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-epi_fieldmap.nii.gz
|__ sub-<label>_ses-<label>_fmapid-<FMAPID>_desc-preproc_fieldmap.nii.gz
|
func/
|__ sub-<label>_ses-<label>_task-rest_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_desc-confounds_timeseries.tsv
|__ sub-<label>_ses-<label>_task-rest_from-scanner_to-boldref_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-scanner_to-T1w_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_from-T1w_to-scanner_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_space-fsLR_den-91k_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-<aparcaseg|aseg>_dseg.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-MNI152NLin6Asym_res-2_desc-preproc_bold.nii.gz
|__ sub-<label>_ses-<label>_task-rest_space-T1w_desc-goodvoxels_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_desc-confounds_timeseries.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-PA_desc-coreg_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_desc-hmc_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_desc-preproc_bold.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_from-boldref_to-<FMAPID>_mode-image_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_dir-PA_from-boldref_to-T2w_mode-image_desc-coreg_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_dir-PA_from-orig_to-boldref_mode-image_desc-hmc_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_dir-PA_from-boldref_to-T2w_mode-image_desc-coreg_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_dir-PA_from-orig_to-boldref_mode-image_desc-hmc_xfm.txt
|__ sub-<label>_ses-<label>_task-rest_dir-PA_hemi-<L|R>_space-fsnative_bold.func.gii
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_den-91k_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-<SPACE>_boldref.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-<SPACE>_desc-brain_mask.nii.gz
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-<SPACE>_desc-preproc_bold.nii.gz
|
|__ figures/
```
*NOTE:* 

- *Labels for `SPACE` (`space-<SPACE>`) include `MNI152NLin6Asym_res-2` and `T2w`*
- *Labels for `FMAPID` (`fmapid<FMAPID>`) include `auto00000`, `auto00001`, `auto00002`, `auto00003`, and `auto00004`*

## OSPREY-BIDS (`osprey/`)

## qMRI Postproc (`qmri_postproc/`)

## QSIPrep (`qsiprep/`)

## QSIRecon (`qsirecon/`)

## XCP-D (`xcpd_d/`)

For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar JSON files are not included below. 

## `anat/`

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
```

## `func/`

```
func/
|__ sub-<label>_ses-<label>_task-rest_desc-abcc_qc.hdf5
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_<motion|outliers|design>.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_den-91k_stat-coverage_boldmap.pscalar.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_den-91k_stat-pearsoncorrelation_boldmap.pconn.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_den-91k_timeseries.ptseries.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_measure-pearsoncorrelation_conmat.tsv

|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_stat-alff_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_stat-coverage_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_stat-mean_timeseries.tsv

|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_stat-pearsoncorrelation_relmat.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_atlas-<label>_stat-reho_bold.tsv

|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_desc-denoised_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_desc-interpolated_bold.dtseries.nii

|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_desc-linc_qc.csv
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_stat-alff_boldmap.dscalar.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_stat-alff_desc-smooth_boldmap.dscalar.nii
|__ sub-<label>_ses-<label>_task-rest_dir-<label>_space-<label>_den-91k_stat-reho_boldmap.dscalar.nii

|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_den-91k_stat-coverage_boldmap.pscalar.nii
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_stat-alff_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_stat-coverage_bold.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|__ sub-<label>_ses-<label>_task-rest_dir-PA_space-fsLR_seg-<SEG>_stat-reho_bold.tsv

```
*NOTE:*

- *Labels for `SEG` (`seg-<SEG>`) include: `4S1056Parcels`, `4S156Parcels`, `4S256Parcels`, `4S356Parcels`, `4S456Parcels`, `4S556Parcels`, `4S656Parcels`, `4S756Parcels`, `4S856Parcels`, `4S956Parcels`, `Glasser`, `Gordon`, `MIDB`,`MyersLabonte`, and `Tian`*
