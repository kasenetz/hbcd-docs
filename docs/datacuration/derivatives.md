# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the [processing pipelines](../processing/pipelines.md). A description of HBCD-specific processing parameters used for each pipeline is available on the [HBCD Processing](https://hbcd-cbrain-processing.readthedocs.io/latest/) webpage. The following sections outline the session-level file and folder contents for each pipeline. 

In the sections below, for readability, the BIDS entities `sub-<label>_ses-<label>` are replaced with the string `SUBSES`. In addition, some entities include a set of specific values, each of which is associated with a separate file; these values are either listed in <>, separated by |, or listed separately within a label values legend.

```
root/
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
            |   |__ sub-<label>_task-MMN_desc-standard_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-upright_topo.jpg
            |   |__ sub-<label>_task-VEP_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-inverted_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-preDeviant_topo.jpg
            |   |__ sub-<label>_task-MMN-desc-Deviant_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-object_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-diffDevVsSta_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-upright2_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-diffInvVsUpr_topo.jpg
            |   |__ sub-<label>_task-MMN_desc-diffDevVsPre_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-diffObjVsUp2_topo.jpg
            |   |__ sub-<label>_task-FACE_desc-Oz_diffERP.jpg
            |   |__ sub-<label>_task-MMN_desc-T7t8_diffERP.jpg
            |   |__ sub-<label>_task-FACE_desc-oz_ERP.jpg 
            |   |__ sub-<label>_task-VEP_desc-oz_ERP.jpg
            |   |__ sub-<label>_task-MMN_desc-t7t8_ERP.jpg
            |   |__ sub-<label>_task-RS_desc-allChAvg_PSD.jpg
            |   |__ sub-<label>_task-RS_desc-allCh_PSD.jpg
            |   |__ sub-<label>_task-RS_desc-ROI_PSD.jpg
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_ERPSummaryStats.csv
            |   |__ SUBSES_task-<FACE|MMN|RS|VEP>_ERPTrialMeasures.csv
            |   |__ SUBSES_task-RS_powerSummaryStats.csv
            | 
            |__ SUBSES_acq-eeg_preprocessingReport.csv
            |__ SUBSES_task-<FACE|MMN|RS|VEP>_acq-eeg_specification.json
```


## MRIQC (`mriqc/`)
MRIQC extracts no-reference IQMs (image quality metrics) from structural (T1w and T2w) and functional MRI (magnetic resonance imaging) data (contained in the JSON files under `anat/` and `func/`) and also generates visual html report files. Please refer to the [MRIQC webpage](https://mriqc.readthedocs.io/en/latest/about.html) to read details about the outputs displayed below.
```
mriqc/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/
        |   |__ SUBSES_run-<label>_T1w.json
        |   |__ SUBSES_run-<label>_T2w.json
        |
        |__ func/
        |   |__ SUBSES_task-rest_dir-<label>_run-<label>_bold.json
        |
        |__ SUBSES_run-<label>_T1w.html
        |__ SUBSES_run-<label>_T2w.html
        |__ SUBSES_task-rest_dir-<label>_run-<label>_bold.html
        |__ SUBSES_dir-<label>_run-<label>_bold.html
```

## Infant-fMRIPrep (`nibabies/`)
Infant-fMRIPrep (also known as NiBabies) outputs from minimal structural and functional MRI processing include visual quality assessment reports, preprocessed derivatives, and confounds to be used for denoising in subsequent processing procedures. Please see their webpage [here](https://nibabies.readthedocs.io/en/latest/outputs.html) for a detailed description of the file outputs. For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report, `SUBSES.html`) and sidecar JSON files are not included below. Also note that filenames may have additional BIDS entities including `run-<label>`.

<details>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltSPACE&gt</b> label values: <code>MNI152NLin6Asym_res-2</code>, <code>T2w</code></li>
    <li><b>&ltFMAPID&gt</b> label values: <code>auto00000</code>, <code>auto00001</code>, <code>auto00002</code>, & <code>auto000003</code>, <code>auto000004</code></li>
  </ul>
</details>
```
nibabies/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/
        |   |__ SUBSES_desc-preproc_T2w.nii.gz
        |   |__ SUBSES_from-MNI152NLin6Asym_to-T2w_mode-image_xfm.h5
        |   |__ SUBSES_from-MNIInfant+1_to-T2w_mode-image_xfm.h5
        |   |__ SUBSES_from-T2w_to-MNI152NLin6Asym_mode-image_xfm.h5
        |   |__ SUBSES_from-T2w_to-MNIInfant+1_mode-image_xfm.h5
        |   |__ SUBSES_from-T2w_to-fsnative_mode-image_xfm.txt
        |   |__ SUBSES_from-fsnative_to-T2w_mode-image_xfm.txt
        |   |__ SUBSES_hemi-<L|R>_<inflated|midthickness|pial|sphere|white>.surf.gii
        |   |__ SUBSES_hemi-<L|R>_space-<dhcpAsym|fsaverage>_desc-reg_sphere.surf.gii
        |   |__ SUBSES_hemi-<L|R>_<curv|sulc|thickness>.shape.gii
        |   |__ SUBSES_space-MNI152NLin6Asym_res-2_desc-brain_mask.nii.gz
        |   |__ SUBSES_space-MNI152NLin6Asym_res-2_desc-preproc_T2w.nii.gz
        |   |__ SUBSES_space-MNI152NLin6Asym_res-2_dseg.nii.gz
        |   |__ SUBSES_space-MNI152NLin6Asym_res-2_label-<CSF|GM|WM>_probseg.nii.gz
        |   |__ SUBSES_space-T2w_desc-<aparcaseg|aseg>_dseg.nii.gz
        |   |__ SUBSES_space-T2w_desc-ribbon_mask.nii.gz
        |   |__ SUBSES_space-T2w_dseg.nii.gz
        |   |__ SUBSES_space-T2w_label-<CSF|GM|WM>_probseg.nii.gz
        |   |__ SUBSES_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
        |
        |__ fmap/
        |   |__ SUBSES_fmapid-<FMAPID>_desc-coeff_fieldmap.nii.gz
        |   |__ SUBSES_fmapid-<FMAPID>_desc-epi_fieldmap.nii.gz
        |   |__ SUBSES_fmapid-<FMAPID>_desc-preproc_fieldmap.nii.gz
        |
        |__ func/
        |   |__ SUBSES_task-rest_dir-PA_desc-brain_mask.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_desc-confounds_timeseries.tsv
        |   |__ SUBSES_task-rest_dir-PA_desc-coreg_boldref.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_desc-hmc_boldref.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_desc-preproc_bold.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_from-boldref_to-T2w_mode-image_desc-coreg_xfm.txt
        |   |__ SUBSES_task-rest_dir-PA_from-boldref_to-auto00000_mode-image_xfm.txt
        |   |__ SUBSES_task-rest_dir-PA_from-orig_to-boldref_mode-image_desc-hmc_xfm.txt
        |   |__ SUBSES_task-rest_dir-PA_hemi-<L|R>_space-fsnative_bold.func.gii
        |   |__ SUBSES_task-rest_dir-PA_space-<SPACE>_boldref.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_space-<SPACE>_desc-brain_mask.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_space-<SPACE>_desc-preproc_bold.nii.gz
        |   |__ SUBSES_task-rest_dir-PA_space-fsLR_den-91k_bold.dtseries.nii
        |
        |__ figures/
        |__ SUBSES.html
```

## OSPREY-BIDS (`osprey/`) 
OSPREY-BIDS is the BIDS extension to the OSPREY pipeline used to process HBCD magnetic resonance spectroscopy (MRS) data. The `HERCULES` and `unedited` folders have matching structures, so only one is displayed below. For readability, the `jpg`/`png` images under the `figures/` and `.json` files accompanying `.tsv` and `.mat` files are not listed. Also note that filenames may additionally include `run-<label>`. Please see their [webpage](https://osprey-bids.readthedocs.io/en/latest/index.html) for a detailed explanation of these outputs.

```
osprey/
|__ sub-<label>/
    |__ ses-<label>/
        |__ HERCULES/
        |   |__ PreOspreyLocalizerReg/
        |   |   |__ figures/*
        |   |   |__ aalreference_seg_aligned_to_localizer.nii.gz
        |   |   |__ c1reference_seg_aligned_to_localizer.nii.gz
        |   |   |__ c2reference_seg_aligned_to_localizer.nii.gz
        |   |   |__ c3reference_seg_aligned_to_localizer.nii.gz
        |   |   |__ readme.txt
        |   |   |__ reference_img_aligned_to_localizer.nii.gz
        |   |   |__ reference_seg_aligned_to_localizer.nii.gz
        |   |   |__ registration_summary.json
        |   |   |__ transform_mat.npy
        |   |
        |   |__ QuantifyResults/
        |   |   |__ diff<1|2>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_amplMets_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_CSFWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_rawWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_tCr_Voxel_1_Basis_1.tsv
        |   |   |__ diff<1|2>_TissCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ sum_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv
        |   |   |__ sum_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ sum_amplMets_Voxel_1_Basis_1.tsv
        |   |   |__ sum_CSFWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ sum_rawWaterScaled_Voxel_1_Basis_1.tsv
        |   |   |__ sum_tCr_Voxel_1_Basis_1.tsv
        |   |   |__ sum_TissCorrWaterScaled_Voxel_1_Basis_1.tsv
        |   |
        |   |__ Reports/
        |   |   |__ reportFigures/*
        |   |   |__ sub-<label>-report.html
        |   |
        |   |__ SegMaps/
        |   |   |__ TissueFractions_Voxel_1.tsv
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-CSF.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-GM.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-Tha.nii.gz
        |   |   |__ SUBSES_acq-hercules_svs.nii_space-scanner_Voxel-1_label-WM.nii.gz
        |   |
        |   |__ VoxelMasks/
        |   |   |__ SUBSES_acq-hercules_svs_space-scanner_mask.nii.gz
        |   |
        |   |__ LogFile.txt
        |   |__ subject_names_and_excluded.tsv
        |   |__ SummaryMRSinMRS.md
        |   |__ QM_processed_spectra.tsv
        |   |__ wrapper_settings.mat
        |
        |__ unedited/*
```

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

## QSIPrep (`qsiprep/`) 
The QSIPrep pipeline is used for preprocessing the HBCD diffusion-weighted MRI (dMRI) data. Preprocessing includes head motion correction, susceptibility distortion correction, MP-PCA denoising, coregistration to T1w images, ANTS spatial normalization, and tissue segmentation. The QSIPrep derivatives are then passed to [QSIRecon](#qsirecon) for reconstruction. Please see a full description of this pipeline on their [webpage](https://qsiprep.readthedocs.io/en/latest/). Below, for readability, the `figures/` folder contents (contains all `svg` and `gif` files rendered in the visual report) are not listed. Actual filenames may also include `run-<label>`. 

```
qsiprep/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/       
        |   |__ sub-<label>_desc-aseg_dseg.nii.gz
        |   |__ sub-<label>_desc-brain_mask.nii.gz
        |   |__ sub-<label>_desc-preproc_T2w.nii.gz
        |   |__ sub-<label>_dseg.nii.gz
        |   |__ sub-<label>_from-MNI152NLin2009cAsym_to-T1w_mode-image_xfm.h5
        |   |__ sub-<label>_from-T1w_to-MNI152NLin2009cAsym_mode-image_xfm.h5
        |   |__ sub-<label>_from-T1wACPC_to-T1wNative_mode-image_xfm.mat
        |   |__ sub-<label>_from-T1wNative_to-T1wACPC_mode-image_xfm.mat
        |   |__ SUBSES_from-orig_to-T1w_mode-image_xfm.txt
        |
        |__ dwi/      
        |   |__ SUBSES_desc-ImageQC_dwi.csv
        |   |__ SUBSES_desc-SliceQC_dwi.json
        |   |__ SUBSES_dwiqc.json
        |   |__ SUBSES_space-T1w_desc-brain_mask.nii.gz
        |   |__ SUBSES_space-T1w_desc-eddy_cnr.nii.gz
        |   |__ SUBSES_space-T1w_desc-preproc_dwi.b
        |   |__ SUBSES_space-T1w_desc-preproc_dwi.bval
        |   |__ SUBSES_space-T1w_desc-preproc_dwi.bvec
        |   |__ SUBSES_space-T1w_desc-preproc_dwi.nii.gz
        |   |__ SUBSES_space-T1w_desc-preproc_dwi.txt
        |   |__ SUBSES_space-T1w_dwiref.nii.gz
        |
        |__ figures/   

```

## QSIRecon
QSIPrep derivatives are passed to QSIRecon for reconstruction, including ODF/FOD reconstruction, tractography, Fixel estimation and regional connectivity. The main `qsirecon/` folder contains the visual `.html` reports (contents of `figures/`, which contains the source image files, not listed below for readability).

The remaining QSIRecon folders contain derivatives generated using a variety of methods and all have the same folder structure as displayed for `qsirecon-DIPYDKI/` below. The folder names are based either on the imaging software (e.g. [Dipy](https://dipy.org/), [MRTrix](https://www.mrtrix.org/), [DSI Studio](https://dsi-studio.labsolver.org/, etc) utilized or model name, e.g. NODDI ([Zhang et al. 2012](https://doi.org/10.1016/j.neuroimage.2012.03.072)). Please see their [webpage](https://qsirecon.readthedocs.io/en/latest/) for a detailed description of the derivatives.
```
root/
|__ derivatives/ 
    |__ qsirecon/
    |  |__ sub-<label>/
    |  |    |__ figures/*
    |  |__ sub-<label>.html
    |
    |__ qsirecon-DIPYDKI/
    |   |__ sub-<label>/
    |       |__ ses-<label>/
    |           |__ dwi/
    |            
    |__ qsirecon-DSIStudio/
    |__ qsirecon-NODDI/
    |__ qsirecon-TORTOISE_model-MAPMRI/
    |__ qsirecon-TORTOISE_model-tensor/
```    
Below, we list the file contents of the session-level `dwi/` folder for each method/model.

### Dipy (`qsirecon-DIPYDKI/`)
<details>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltMDP&gt</b> label values: <code>AD</code>, <code>AK</code>, <code>KFAp</code>, <code>MD</code>, <code>MKT</code>, <code>MK</code>, <code>RD</code>, & <code>RK</code></li>
    </ul>
</details>
```
dwi/
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-dki_mdp-<MPD>_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-FA_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-T1w_desc-preproc_model-dki_mdp-<MDP>_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_model-tensor_mdp-FA_dwimap.nii.gz
```

###  DSI Studio (`qsirecon-DSIStudio/`)
<details>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltMDP&gt</b> label values: <code>ad</code>, <code>fa</code>, <code>ha</code>, <code>md</code>, <code>rd</code>
    <li><b>&ltMPF&gt</b> label values: <code>txx</code>, <code>txy</code>, <code>tyy</code>, <code>tyz</code>, <code>tzz</code></li>
    <li><b>&ltASSOC&gt</b> label values: <code>ArcuateFasciculus</code>, <code>FrontalAslantTract</code>, <code>InferiorFrontoOccipitalFasciculus</code>, <code>InferiorLongitudinalFasciculus</code>, <code>MiddleLongitudinalFasciculus</code>, <code>ParietalAslantTract</code>, <code>UncinateFasciculus</code>, &amp; <code>VerticalOccipitalFasciculus</code></li>
    <li><b>&ltPBG&gt</b> label values: <code>FasciculusLenticularis</code>, <code>FasciculusSubthalamicus</code>, <code>Fornix</code>, <code>OpticRadiation</code></li>
    <li><b>&ltPB&gt</b> label values: <code>CorticospinalTract</code>, <code>ReticularTract</code></li>
    </ul>
</details>

```
dwi/
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_fit-GQI_mdp-gfa_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_fit-GQI_mdp-iso_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-GQI_mdp-qa_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-RDI_mdp-rd<1|2>_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<MPD>_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-<MFP>_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_bundle-Association_<ASSOC><L|R>_streamlines.tck
 |__ SUBSES_space-T1w_desc-preproc_bundle-ProjectionBasalGanglia_<PBG><L|R>_streamlines.tck
 |__ SUBSES_space-T1w_desc-preproc_bundle-ProjectionBrainstem_<PB><L|R>_streamlines.tck
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_tdistats.tsv
 |__ SUBSES_space-T1w_desc-preproc_bundlestats.csv
 |__ SUBSES_space-T1w_desc-preproc_dwimap.fib.gz
 |__ SUBSES_space-T1w_desc-preproc_fit-GQI_mdp-gfa_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_fit-GQI_mdp-iso_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_mapping.map.gz
 |__ SUBSES_space-T1w_desc-preproc_model-GQI_mdp-qa_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_model-RDI_mdp-rd<1|2>_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_model-tensor_mdp-<MDP>_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_model-tensor_mfp-<MFP>_dwimap.nii.gz
```

### NODDI Model (`qsirecon-NODDI/`)
```
dwi/
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-icvf_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-isovf_dwimap.nii.gz
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-noddi_mdp-od_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-T1w_desc-preproc_dwimap.fib.gz
 |__ SUBSES_space-T1w_desc-preproc_model-NODDI_mfp-AMICOconfig_dwimap.pickle.gz
 |__ SUBSES_space-T1w_desc-preproc_model-noddi_mdp-<MDP>_dwimap.nii.gz
 |__ SUBSES_space-T1w_desc-preproc_model-noddi_mfp-direction_dwimap.nii.gz
```

### TORTOISE (`qsirecon-TORTOISE_model-<MAPMRI|tensor>/`)
The [TORTOISE](https://github.com/QMICodeBase/TORTOISEV4) software calculates MAPMRI and Tensor fits and scalar maps.
<details>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltMDP&gt</b> label values: <code>NG</code>, <code>NGpar</code>, <code>NGPerp</code>, <code>PA</code>, <code>PAth</code>, <code>RTAP</code>, <code>RTOP</code>, & <code>RTPP</code></li>
    <li><b>&ltTMDP&gt</b> label values: <code>ad</code>, <code>fa</code>, <code>li</code>, & <code>rd</code></li>
    </ul>
</details>
```
## TORTOISE MAPMRI Model (qsirecon-TORTOISE_model-MAPMRI/)
dwi/
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-mapmri_mdp-<MDP>_dwimap.nii
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-AM_dwimap.nii
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
 |__ SUBSES_space-T1w_desc-preproc_model-mapmri_mdp-<MDP>_dwimap.nii
 |__ SUBSES_space-T1w_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
 |__ SUBSES_space-T1w_desc-preproc_model-tensor_mfp-AM_dwimap.nii

## TORTOISE Tensor Model (qsirecon-TORTOISE_model-tensor/)
dwi/
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mdp-<TMDP>_dwimap.nii
 |__ SUBSES_space-MNI152NLin2009cAsym_desc-preproc_model-tensor_mfp-AM_dwimap.nii
 |__ SUBSES_space-T1w_desc-preproc_bundles-DSIStudio_scalarstats.tsv
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

## XCP-D (`xcp_d/`)
XCP-D performs functional MRI post-processing and noise regression from Infant-fMRIPrep derivatives. Please see the [XCP-D webpage](https://xcp-d.readthedocs.io/en/latest/) to learn more and read details about the output file types. For readability, the `figures/` folder contents (contains all `html` and `svg` files rendered in the visual report) and sidecar `.json` files are not included below. Also note that files may have additional BIDS entities including `dir-<label>` (to specify its derivation from data acquired in the `AP` or `PA` phase encoding directions) or `run-<label>` as appropriate. 

<details>
  <summary>Label Values Legend</summary>
  <ul>
    <li><b>&ltSEG&gt</b> label values: <code>4S1056Parcels</code>, <code>4S156Parcels</code>, <code>4S256Parcels</code>, <code>4S356Parcels</code>, <code>4S456Parcels</code>, <code>4S556Parcels</code>, <code>4S656Parcels</code>, <code>4S756Parcels</code>, <code>4S856Parcels</code>, <code>4S956Parcels</code>, <code>Glasser</code>, <code>Gordon</code>, <code>MIDB</code>,<code>MyersLabonte</code>, <code>Tian</code></li>
    </ul>
</details>
```
xcp_d/
|_ sub-<label>/
|  |_ ses-<label>/
|     |_ anat/
|     |  |__ SUBSES_space-MNI152NLin6Asym_desc-preproc_T2w.nii.gz
|     |  |__ SUBSES_space-MNI152NLin6Asym_dseg.nii.gz
|     |  |__ SUBSES_space-fsLR_den-91k_<curv|sulc|thickness>.dscalar.nii
|     |  |__ SUBSES_space-fsLR_seg-<SEG>_stat-mean_desc-curv_morph.tsv
|     |  |__ SUBSES_space-fsLR_seg-<SEG>_stat-mean_desc-sulc_morph.tsv
|     |  |__ SUBSES_space-fsLR_seg-<SEG>_stat-mean_desc-thickness_morph.tsv
|     |
|     |_ func/
|     |  |__ SUBSES_task-rest_desc-abcc_qc.hdf5
|     |  |__ SUBSES_task-rest_<design|motion|outliers>.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_desc-denoisedSmoothed_bold.dtseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_desc-denoised_bold.dtseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_desc-linc_qc.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_stat-alff_boldmap.dscalar.nii
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_stat-alff_desc-smooth_boldmap.dscalar.nii
|     |  |__ SUBSES_task-rest_space-fsLR_den-91k_stat-reho_boldmap.dscalar.nii
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-coverage_boldmap.pscalar.nii
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_den-91k_stat-mean_timeseries.ptseries.nii
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-alff_bold.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-coverage_bold.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-mean_timeseries.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-reho_bold.tsv
|     |  |__ SUBSES_task-rest_space-fsLR_seg-<SEG>_stat-pearsoncorrelation_relmat.tsv
|     |
|     |_ figures/
|
|_ sub-<label>_ses-<label>_executive_summary.html
```
