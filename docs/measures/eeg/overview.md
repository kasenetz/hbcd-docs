# Overview

## EEG Parameters

![](images/EEG_acquisition_protocol.png)

<details>
<summary>Implementation & Data Collection Details</summary>
<ul>
<br>
<p><strong>Method of Administration</strong>: RA administered in person <br />
<strong>Child Specific/Unspecific Form</strong>: Child Specific <br />
<strong>Visits</strong>: Visit 3 (3-9 months), Visit 4 (9-15 months), Visit 6 (15-48 months) <br />
<strong>Estimated length of time for completion</strong>: Video RS 3 min; Face 5 min, MMN 11.5 [V03] & 8.5 [V04/6] min; VEP 1 min</p>
</details>

## Quality Control & Known Issues    
QC procedures for the HBCD Study EEG protocol are described in [Fox et al. (2024)](https://doi.org/10.1016/j.dcn.2024.101447). In brief, data are cleaned and preprocessed using the Maryland Analysis of Developmental EEG (MADE) pipeline, which generates metrics useful for QC such as outlier statistics for a given task epoch (Debnath et al., 2019). Additional QC metrics recorded during acquisition include EEG cap application quality ratings for each recording. Statistics and ratings including evaluating retained epochs and line noise level are monitored via a LORIS dashboard to facilitate ongoing QC. Site-specific check-ins and troubleshooting are performed to ensure protocol and data quality consistency across sites. 

**Common Issues Identified**        
A common issue that arose during QC for all tasks was irregular application of EEG sensors. In addition, inclusion of partial task completion due to infant fussing and missing stimulus flags were commonly noted for the faces and auditory mismatch negativity tasks.

**Potential Issues**        
Potential issues flagged by subject matter experts include changes between V03 and V04/6 in (1) video content of the video RS task and (2) the interstimulus interval (ISI) of the auditory mismatch negativity task (see Fox et al. (2024) and Morr et al. (2002) for more information about the ISI change). No potential issues were flagged for the faces and visual evoked potential tasks.

## Resources
- [HBCD E-Prime Task Manual](pdfs/HBCDE-PrimeTaskManual.pdf)  
- [Official EEG Acquisition Manual](pdfs/OfficialEEGAcquisitionManual6.23.24.pdf)
