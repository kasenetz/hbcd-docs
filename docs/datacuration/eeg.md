# EEG Data Curation & BIDS Conversion

## BIDS Conversion
Data are converted to BIDS using EEG2BIDS Wizard, a custom MATLAB application developed for HBCD. Each study site has the EEG2BIDS Wizard installed at their study site and uses the program to upload raw EEG files and associated metadata after each EEG session. The EEG2BIDS Wizard performs QC checks, converts the data to BIDS formatting, and handles data transfer (see details in the section below). The resulting BIDS data structure is:
```
assembly_bids/ 
|__ participants.tsv
|__ participants.json 
|__ sub-<label>/
|   |__ sub-<label>_sessions.tsv
|   |__ sub-<label>_sessions.json
|   |__ ses-<label>/
|       |__ eeg/
|       |

(Location of electrodes)
|       |   |__sub-<label>_ses-<label>_acq-ecg_space-CapTrak_electrodes.tsv
|       |   |__sub-<label>_ses-<label>_acq-ecg_space-CapTrak_coordsystem.json
|       |   |__sub-<label>_ses-<label>_acq-eeg_space-<CapTrak/CTF>_electrodes.tsv
|       |   |__sub-<label>_ses-<label>_acq-eeg_space-<CapTrak/CTF>_coordsystem.json

(Task acquisitions)
|       |   |__sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-<eeg/ecg>_channels.tsv
|       |   |__sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-<eeg/ecg>_eeg.json
|       |   |__sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-<eeg/ecg>_eeg.set
|       |   |__sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-<eeg/ecg>_events.tsv
|       |   |__sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-<eeg/ecg>_events.json
|       |   |
|       |   |__ sourcedata/
|       |       |__ sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-eeg_flags.json
|       |       |__ sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-eeg_impedances.json
|       |       |__ sub-<label>_ses-<label>_task-<FACE/MMN/RS/VEP>_acq-eeg_eventlogs.txt
```
## Additional File Descriptions
**Location of electrodes**    
Electrodes were placed on either the head (`acq-eeg`) or chest (`acq-ecg`). Location coordinates are specified in the `*_electrodes.tsv` file following cartesian coordinates specified by fields of the accompanying `*_coordsystem.json` file.

**Task acquisitions**      
EEG is acquired for each task (see [Data Measures & Quality Control > EEG](../measures/eeg/overview.md) for task descriptions) as indicated by the `task-<label>` BIDS entity

**Sourcedata files**    
These files include information about quality control flags and acquisition (`*_flags.json`- see [Quality Control & Known Issues](../measures/eeg/overview.md#quality-control-known-issues)), impedance values to ensure good electrode contact (`*_impedence.json`), and task stimuli presentations (`*_eventlogs.txt`).