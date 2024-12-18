
# Imaging, EEG, & Motion
Imaging (MRI & MRS), EEG, and motion data are provided at a session-level under `assembly_bids`.

```
root/
|__ assembly_bids/ 
|   |__ participants.tsv
|   |__ participants.json 
|   |__ sub-<label>/
|       |__ sub-<label>_sessions.tsv
|       |__ sub-<label>_sessions.json
|       |__ ses-<label>/
|           |__ anat/
|           |__ dwi/
|           |__ eeg/
|           |__ fmap/
|           |__ func/
|           |__ motion/
|           |__ mrs/
|           |__ sub-<label>_ses-<label>_scans.tsv
|           |__ sub-<label>_ses-<label>_scans.json
```

## IMAGING
### Anatomical (anat/)
Anatomical files include T1- and T2-weighted MRI images, MRS localizer files (`acq-mrsLocAx` and `acq-mrsLocCor` indicate axial and coronal localizers, respectively), and Quantitative MRI QALAS files:
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

### Functional (func/) and Fieldmaps (fmap/) 
Functional files include BOLD functional resting state images under `func/`. Each functional acquisition has an associated pair of EPI fieldmaps acquired to use for distortion correction under `fmap/`, with AP (`dir-AP`) and PA (`dir-PA`) phase encoding directions. 

**Siemens, GE, and Philips additionally include B1 fieldmaps.** For Siemens, `acq-<anat|fmap>` denotes the anatomical (like) image and scaled flip angle map whereas for GE and Philips, `acq-tr<1|2>` denotes the first and second TR image (*see BIDS specification for quantitative MRI: [TB1TFL and TB1RFM](https://bids-specification.readthedocs.io/en/stable/appendices/qmri.html#tb1tfl-and-tb1rfm-specific-notes) and [TB1AFI](https://bids-specification.readthedocs.io/en/stable/appendices/qmri.html#tb1afi-specific-notes)*):

```
|__ func/
|   |__ sub-<label>_ses-<label>_task-rest_dir-PA_run-<label>_bold.nii.gz
|   |__ sub-<label>_ses-<label>_task-rest_dir-PA_run-<label>_bold.json
|
|__ fmap/
|   |__ sub-<label>_ses-<label>_dir-AP_run-<label>_epi.nii.gz
|   |__ sub-<label>_ses-<label>_dir-AP_run-<label>_epi.json
|   |__ sub-<label>_ses-<label>_dir-PA_run-<label>_epi.nii.gz
|   |__ sub-<label>_ses-<label>_dir-PA_run-<label>_epi.json

SIEMENS ONLY:
    |__ sub-<label>_ses-<label>_acq-anat_run-<label>_TB1TFL.nii.gz
    |__ sub-<label>_ses-<label>_acq-anat_run-<label>_TB1TFL.json
    |__ sub-<label>_ses-<label>_acq-fmap_run-<label>_TB1TFL.nii.gz
    |__ sub-<label>_ses-<label>_acq-fmap_run-<label>_TB1TFL.json

GE AND PHILIPS ONLY:
    |__ sub-<label>_ses-<label>_acq-tr1_run-<label>_TB1AFI.nii.gz 
    |__ sub-<label>_ses-<label>_acq-tr1_run-<label>_TB1AFI.json 
    |__ sub-<label>_ses-<label>_acq-tr2_run-<label>_TB1AFI.nii.gz
    |__ sub-<label>_ses-<label>_acq-tr2_run-<label>_TB1AFI.json

```

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

## EEG (eeg/)
For EEG BIDS data, the specific **location of electrodes**, placed on either the head (`acq-eeg`) or chest (`acq-ecg`), is specified in the `*_electrodes.tsv` files following cartesian coordinates provided by the accompanying `*_coordsystem.json` file. For **task acquisitions**, the task is specified by `task-<label>`, with task options of `FACE`, `MMN`, `RS`, and `VEP` (see task details [here](../measures/eeg/overview.md#eeg-parameters)).

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
<li>Information about quality control flags and acquisition (<code>*_flags.json</code>- see QC details <a href="../../measures/eeg/overview#quality-control-known-issues">here</a>)</li>
<li>Impedance values used to ensure good electrode contact (<code>*_impedence.json</code>)</li>
<li>Task stimuli presentations (<code>*_eventlogs.txt</code>)</li>
</ul>


## MOTION (motion/)
Axivity AX6 sensor data provided in the data release include `_motion.tsv` sensor recordings with corresponding `*_channels.tsv` files that describe each column of of the motion file. The acquisition (`acq-`) label for the calibration files is `calibration` while the label for the 72-hr data files is `primary`. The `task` label will be either `LeftLegMovement` or `RightLegMovement` for sensors placed on the left or right leg. Each `.tsv` file is accompanied by a JSON sidecar containing recording-related metadata: 

```
motion/  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_motion.tsv  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_motion.json
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_channels.tsv  
|__ sub-<label>_ses-<label>_task-<label>_tracksys-imu_acq-<label>_channels.json
```