# Overview: Brain Imaging Data Structure

As much as possible, HBCD processing utilizes the [Brain Imaging Data Structure](https://bids-specification.readthedocs.io/en/stable/) (BIDS) standard for data organization. At a high level, the BIDS structure for raw HBCD data will appear like so:

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
|   
|__ phenotype/
|   |__ biosample_urine.tsv
|   |__ biosample_urine.json
|   |__ sed_basic_demographics.tsv
|   |__ sed_basic_demographics.json
|   |__ visit_data.tsv
|   |__ visit_data.json
|   |__ <instrument_name>.tsv (repeat for all selected instruments)
|   |__ <instrument_name>.json (repeat for all selected instruments)
```

The **`assembly_bids`** folder includes raw MR, EEG, and motion data organized under subject/session-specific directories. In a large infant study, missing data is common, leading to variations in the number of folders and files available per subject and session. The HBCD acquisition spans multiple modalities, often collected at different times, with some acquisitions occurring on separate days even within the same modality. Participant-, session-, and scan-level data is captured by `participants.tsv`, `sessions.tsv`, and `scans.tsv` files respectively, each accompanied by JSON files with column descriptions and field definitions.

The **`phenotype`** folder includes instrument data, visit data, biosample, and demographics information for all participants.