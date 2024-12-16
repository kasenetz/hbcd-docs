# Overview

## EEG Parameters

The full EEG Parameters can be found on the [HBCD Study webpage](https://hbcdstudy.org/study-protocols/) under Brain Measurement Tools.

<details>
<summary>Implementation & Data Collection Details</summary>
<ul>
<li><b>Method of Administration</b>: RA administered in person</li>
<li><b>Child Specific/Unspecific Form</b>: Child Specific</li>
<li><b>Visits</b>: V03, V04, V06</li>
<li><b>Estimated length of time for completion</b>: Video RS 3 min; Face 4.5 min, MMN 11.5(V03) & 8.5 (V04/06) min; VEP 1 min</li>
</ul>
</details>

## Quality Control & Known Issues 
### Quality Control Procedures   
QC procedures for the HBCD Study EEG protocol are described in [Fox et al. (2024)](https://doi.org/10.1016/j.dcn.2024.101447). In brief, data undergo initial QC checks when they are uploaded to the LORIS interface via the [EEG2BIDS Wizard](https://github.com/ChildDevLab/Bids_Wizard) application. Then, they are cleaned and preprocessed using the HBCD Maryland Analysis of Developmental EEG [(HBCD-MADE) pipeline](https://github.com/DCAN-Labs/HBCD-MADE), which generates metrics useful for QC such as line noise estimates and number of trials retained after processing [(Debnath et al., 2019)](https://doi.org/10.1111/psyp.13580). Visit the [HBCD-MADE ReadTheDocs](https://hbcd-made.readthedocs.io/en/latest/) for a full list of outputs. As an additional QC measure, quality of EEG net application is rated according to a rubric for each upload.  The EEG Core team at the University of Maryland uses a LORIS dashboard to facilitate ongoing QC monitoring and technical support to study sites.  The EEG core also holds site-specific check-in and troubleshooting calls to ensure protocol adherence and consistency of data quality across sites.

### Common QC & Potential Issues
A common quality control issue that arose across tasks was irregular net application, resulting in misplaced EEG sensors across the scalp. In addition, the longest tasks (Auditory Mismatch Negativity and Faces) were commonly incomplete due to infant fussing. Potential issues flagged by subject matter experts include the following changes between V03 and V04/6 stimuli: 

<li><b>1. Video content of the video RS task</b>: The video for Visit 3 is a compilation of clips taken from infant-friendly videos that display colorful toys and abstract images. The video for later visits contains alternating 30 second clips of construction scenes and marble runs.</li>

<li><b>2. Inter-stimulus interval (ISI) of the auditory mismatch negativity task</b>: The ISI was changed between age visits to account for developmental differences in processing speed that impact the generation of an MMN See Morr et al. (2002) for more information about the ISI change.</li>

No potential issues were flagged for the faces and visual evoked potential tasks.

## Resources
- [Debnath et al., 2019](https://doi.org/10.1111/psyp.13580)  
- [Fox et al., 2024](https://doi.org/10.1016/j.dcn.2024.101447)  
- [Morr et al., 2002](https://doi.org/10.1097/00003446-200204000-00005)  
- [Official EEG Acquisition Manual](https://docs.google.com/document/d/1V8JyVsdwBP83LX5j7Lpegzexsh0ZAutj4WGmPh9aSAk/edit?tab=t.0)

