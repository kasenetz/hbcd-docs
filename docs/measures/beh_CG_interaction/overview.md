# Overview

## Instruments
The current data release includes the following Behavioral and Caregiver-Child Interaction instruments:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name of Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Acronym</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Construct</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Table Name</th>
    </tr>
  </thead>
<tbody>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../ecPROMIS">Early Childhood Patient-Reported Outcome Measurement Information System Child/Caregiver Relationship Scale</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ecPROMIS</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Relationships</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_pms__cc__inf?</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../IBQ-R">Infant Behavior Questionnaire &ndash; Revised Very Short Form + Behavior Inhibition</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">IBQ-R (VSF)+BI</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Temperamental Surgency/Extraversion, Negative Affectivity, Effortful Control, and Behavioral Inhibition</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_ibqr</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../MAPS-TL">Multidimensional Assessment Profiles - Temper Loss scale</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MAPS-TL</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Irritability</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_mapdb__inf?</td>
	</tr>
</tbody>
</table>

## Implementation & Data Collection

All surveys are child-specific and filled out remotely by the primary caregiver. Surveys were translated to Spanish for HBCD by [BURG Translations](https://burgtranslations.com/our-services/). Additional information is as follows:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Visits</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Completion Time</th>      
    </tr>
  </thead>
<tbody>
	<tr>
		<td>ecPROMIS</td>
		<td>V03, V04, V06</td>
		<td>1-2 min</td>
	</tr>
	<tr>
		<td>IBQ-R (VSF)+BI</td>
		<td>V03, V05**</td>
		<td>7-10 min</td>
	</tr>
	<tr>
		<td>MAPS-TL</td>
		<td>V03</td>
		<td>5 min</td>
	</tr>
</tbody>
</table>
<small>**Validated for ages 3 months 0 days to 17 months 30 days for HBCD</small>


## HBCD Modifications
Alterations were made to ecPROMIS, IBQ-R (VSF)+BI, and MAPS-TL for use of gender-neutral terms. Measure instructions and individuals items that reference gendered pronouns (‘her/him’, ‘she/he’) were changed to “my/the baby/child” or “they/them” as fit for the wording. In addition, “parent” was replaced with “parent/caregiver” where appropriate. Additional HBCD modifications made to specific measures are outlined in each section as needed.

Because the psychometric validation for these measures was done using items from the original measures, future publications should account for and note edits made to individual items as part of HBCD DEI review.

## Quality Control & Known Issues  
<ul>
<p style="font-size: 1em; margin-bottom: 5px;">QC Procedures:</p>
<li>Examine the range of the child’s age to ensure that it falls within 3-9 months for ecPROMIS/MAPS-TL and 3-18 months for IBQ-R (VSF)+BI</li>
<li>Examine missingness (count the number of items answered for each participant)</li>
<li>Calculate sum scores and means, applying prorated scoring to account for missing data</li>
<li>Generate summary statistics and visualizations for item-level frequencies, age, and scores</li>
<li>Use Calculate Cronbach's Alpha for reliability </li>
</ul>

Common errors noted during QC include incorrect administration ages and prorated scoring not being accurately applied to observations with missing responses. Subject matter experts note that these measures (ecPROMIS, IBQ-R (VSF)+BI, and MAPS-TL) assess normative variability in child behavior and should be considered in relation to the child’s age and developmental context. *This is not a clinical or diagnostic tool*.

