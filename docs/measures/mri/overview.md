# Overview: MRI Quality Control Procedures

Quality control procedures involve reviewing unprocessed or minimally processed MRI data to identify and exclude scans with severe artifacts from further processing. An initial protocol compliance check is conducted by extracting information from DICOM headers to identify common issues and protocol deviations, such as missing files or incorrect patient orientation. Automated QC metrics are then calculated from the image data. For structural scans (T1w, T2w, and qMRI), a deep learning model estimates motion artifacts, while metrics for motion, bad frames, line artifacts, and field-of-view (FOV) cutoff are assessed for dMRI, fMRI, and field maps.

Based on these automated metrics, a subset of series are selected for manual review using multivariate prediction and Bayesian classifiers. During the manual review, data quality is scored according to the severity of specific artifacts. For structural scans, motion artifacts are rated on a scale of 0 to 3, where 0 indicates no artifact, 1 indicates mild, 2 moderate, and 3 severe. Reviewers also document other issues, such as intensity inhomogeneity or ghosting. For dMRI, fMRI, and field maps, scored artifacts include susceptibility artifacts, FOV cutoff, and line artifacts, with additional issues noted as necessary. Series with severe artifacts that compromise data usability are rejected (QC = 0).

Quality control metrics are utilized during the conversion process to the Brain Imaging Data Structure (BIDS) standard, ensuring data curation in preparation for image preprocessing, as described [here](../../datacuration/bids.md#data-curation--exclusion-criteria).

<details class="collapsible references">
  <summary class="references">References</summary>
 <ul>
<li>Dean III, D. C., Tisdall, M. D., Wisnowski, J. L., Feczko, E., Gagoski, B., Alexander, A. L., ... &amp; HBCD MRI Working Group. (2024). Quantifying brain development in the HEALthy Brain and Child Development (HBCD) Study: The magnetic resonance imaging and spectroscopy protocol. <em>Developmental Cognitive Neuroscience</em>, 70, 101452. <a href="https://doi.org/10.1016/j.dcn.2024.101452">https://doi.org/10.1016/j.dcn.2024.101452</a></li>
</ul>
</details>