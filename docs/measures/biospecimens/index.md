# Biospecimens & Omics

## Implementation & Data Collection
The current data release includes the following toxicology screens collected from the pregnant/postpartum person (estimated time of completion 5 minutes per screen). Additional information is as follows:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Screen</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Administration Method</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Visits</th>      
    </tr>
  </thead>
<tbody>
<tr>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../blood">Blood</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Phlebotomist-collected venous blood, which is pipetted onto dried blood spot cards</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">V01</td>
</tr>
<tr>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../nails">Nails</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Self-collected under research team supervision, or collected by research team</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">V01, V02</td>
</tr>
<tr>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../urine">Urine</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Self-collected</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">V01</td>
</tr>
</tbody>
</table>

## Quality Control & Known Issues
QC procedures involved examining assay ranges and categorical versus continuous measures. No common issues were identified from QC. Potential issues identified by subject matter experts are as follows:

**NAILS**     
The nail processing workflow was re-developed and implemented on July 1, 2024 and thus data collected before that point will does not use the remnant of ELISA extract for confirmation for specimens with too little sample.

**URINE**           
Urine specimen validation is determined based on creatinine, pH, and nitrite measurements. Specimens with low creatinine (<20 mg/dL) are confirmed using specific gravity via refractometer, and the creatinine analysis is repeated to rule out issues with the first analysis (e.g. sample mix-ups, air bubble in a line on the instrument, etc.). All assays are marked as invalid for specimens identified as dilute, substituted, adulterated, or otherwise insufficient. However, for data release, only the initial creatinine results are reported. Creatinine and specific gravity values are therefore provided for researchers who wish to adjust for urinary concentration in continuous measures or apply different thresholds.