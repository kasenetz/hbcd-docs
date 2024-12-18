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
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.nii.gz
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_dseg.json
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.nii.gz
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_volumes.json            
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.nii.gz
            |__ sub-<label>_ses-<label>_space-<T1w|T2w>_desc-aseg_brain-mask.json
```


## MADE (`made/`)

## MRIQC (`mriqc/`)