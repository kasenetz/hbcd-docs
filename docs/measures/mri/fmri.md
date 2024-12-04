# Functional MRI (fMRI)
*See [Overview](overview.md) for details on quality control and [MRI Protocols](../../mriprotocols/overview.md) for information on sequence installation. All functional MRI (fMRI) data were acquired during visits V02, V03, V04, and V06.*     

Whole-brain functional activity as measured by functional magnetic resonance imaging (fMRI). The blood oxygen level dependent (BOLD) signal is measured at each voxel in 2mm isotropic space with a repetition time (TR) of 1725 ms and multi-band (MB) factor of 4. Resting state fMRI data are collected during sleep (for infants <30 months old) in 7.5 minute runs. Two runs are collected, with more runs collected as needed to get a minimum of 7.5 minutes of low-motion (framewise displacement, FD <0.3) data added across all runs. Additional details are available at [Dean et al. 2024](https://doi.org/10.1016/j.dcn.2024.101452). 

During processing, these data are registered to an age-specific MNI volumetric atlas as well as fs_LR32k surface space. These volumetric and surface-based time series will be made available for each subject as well as specific derivatives including parcellated time series (using a variety of surface parcellations) and functional connectivity values among parcels and vertices/voxels. Time series of framewise displacement (FD) will also be made available for each participant as well as average FD (after censoring frames with FD>0.3).

## Quality Control & Known Issues
QC procedures during data acquisition involve measuring framewise displacement (FD) in real time with FIRMM and 7.5-minute data runs are collected until there are at least 7.5 minutes of low-motion (FD<0.3) data. fMRI data are sent to the HBCD Data Coordinating Center (HDCC) where automated QC includes assessing fMRI protocol fidelity and manual QC on a subset of images identifies common artifacts. During fMRI processing, only individual runs with at least 2.5 minutes of low-motion data (FD<0.3) are included in computed derivatives.

Regarding common issues noted during QC, signal dropout is noted in posterior occipital cortex, consistent with prior infant fMRI using posterior-anterior (PA) acquisitions. High motion is also noted in a subset of subjects. Subject matter experts did not identify any additional potential issues.

<details class="collapsible references">
  <summary class="references">References</summary>
 <ul>
<li><p>Dean III, D. C., Tisdall, M. D., Wisnowski, J. L., Feczko, E., Gagoski, B., Alexander, A. L., ... &amp; HBCD MRI Working Group. (2024). Quantifying brain development in the HEALthy Brain and Child Development (HBCD) Study: The magnetic resonance imaging and spectroscopy protocol. <em>Developmental Cognitive Neuroscience</em>, 70, 101452. <a href="https://doi.org/10.1016/j.dcn.2024.101452">10.1016/j.dcn.2024.101452</a></p></li>
</ul>
</details>