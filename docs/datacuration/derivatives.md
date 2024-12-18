# Derivatives

The `derivatives/` folder contains minimally preprocessed outputs from the processing pipelines.

```
root/
|__ derivatives/ 
    |__ bibsnet/
    |__ made/
    |__ mriqc/
    |__ nibabies/
    |__ osprey/
    |__ qmri_postproc/
    |__ qsiprep/
    |__ qsireconn/
    |__ symri/
    |__ xcp_d/
```


## BIBSNet (`bibsnet/`)

```
bibsnet/
|__ sub-<label>/
    |__ ses-<label>/
        |__ anat/
            |__ sub-<label>_ses-<label>_space-T1w_desc-aseg_dseg.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T1w_desc-aseg_volumes.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T1w_desc-aseg_brain-mask.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T1w_desc-aseg_brain-mask.<json|nii.gz>   
            |__ sub-<label>_ses-<label>_space-T2w_desc-aseg_dseg.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T2w_desc-aseg_volumes.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T2w_desc-aseg_brain-mask.<json|nii.gz>
            |__ sub-<label>_ses-<label>_space-T2w_desc-aseg_brain-mask.<json|nii.gz>         

```


## MADE (`made/`)

## MRIQC (`mriqc/`)