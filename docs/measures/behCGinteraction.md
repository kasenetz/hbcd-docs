# Behavior & Caregiver-Child Interaction

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
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#ecpromis-child-caregiver-interaction">Early Childhood Patient-Reported Outcome Measurement Information System Child/Caregiver Relationship Scale</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ecPROMIS</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Relationships</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_pms__cc__inf</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#ibq-r-very-short-form-behavioral-inhibition">Infant Behavior Questionnaire &ndash; Revised Very Short Form + Behavior Inhibition</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">IBQ-R (VSF)+BI</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Temperamental Surgency/Extraversion, Negative Affectivity, Effortful Control, and Behavioral Inhibition</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_ibqr</td>
	</tr>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#maps-tl">Multidimensional Assessment Profiles - Temper Loss scale</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MAPS-TL</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Irritability</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_mapdb__inf</td>
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
<li>Calculate Cronbach's Alpha for reliability </li>
</ul>

Common errors noted during QC include incorrect administration ages and prorated scoring not being accurately applied to observations with missing responses. Subject matter experts note that these measures (ecPROMIS, IBQ-R (VSF)+BI, and MAPS-TL) assess normative variability in child behavior and should be considered in relation to the child’s age and developmental context. *These are not a clinical or diagnostic tool*.

## Instrument Details
### ecPROMIS Child-Caregiver Interaction
The ecPROMIS (Early Childhood Patient-Reported Outcome Measurement Information System) offers clinicians and researchers a brief, efficient, and precise way to evaluate young children’s well-being. One component is the Child-Caregiver Relationship Scale, which assesses the degree to which young children develop close, satisfying relationships with caregivers. 

The **ecPROMIS Child-Caregiver Relationship Form (Infancy: < 1 year)** was developed for HBCD based on this scale (specifically the *ecPROMIS Parent-Report Short Form v1.0 - Social Relationships – Child-Caregiver Interactions 5a Form*) with updated language to make the items suitable for the pre-V03 age range (3 to 9 months) (i.e. the term ‘my child’ was replaced with 'my baby,' per the guidance of ecPROMIS developers, as the original measure was designed for 1-5 year old children).
<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
  <span>
    <span class="text">Scoring Procedures</span>
  </span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<br>
<p>Each of the 5 items for ecPROMIS Child-Caregiver Interaction is answered on a scale of 1-5: 1 (Never), 2 (Rarely), 3  (Sometimes), 4 (Often), and 5 (Always). A sum score is generated when the caregiver answers at least 3 out of the 5 items (<i>ecpromis1, ecpromis2, ecpromis3, ecpromis4, ecpromis5</i>). If caregivers answer 3 or 4 items, a prorated sum score is calculated using the formula: <code>(sum of items answered/the number of items answered)*5</code>. If fewer than 3 items are completed, the sum score is marked as missing.</p>
</div>
</p>

### IBQ-R Very Short Form + Behavioral Inhibition
The IBQ-R (VSF)+BI is a caregiver report form used to assess temperamental reactivity and regulation in infancy, focusing on key traits that influence development and behavior during the early years. It is adapted from the well-validated IBQ-R Very Short Form with additional items reflecting Behavioral Inhibition from the long form of the IBQ-R.

In addition to the overall *Surgency, Negative Affect and Effortful Control* scales derived from the validated IBQ-R-VSF, the HBCD Workgroup and measure experts added a Behavior Inhibition (or Social Fear) scale using items from the long form of the IBQ-R (IBQ-R-LF) (see scale items listed in drowpdown menu below). The HBCD measure therefore consists of 4 scale domains: surgency/extraversion (13 items), negative affectivity (12 items), effortful control (12 items), and behavioral inhibition (13 items). 

<p>
<div id="BIscaleitems" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">BI Scale Items</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<ul>
<li>38. When introduced to an unfamiliar adult, how often did the baby hang back from the adult?</li>
<li>39. When introduced to an unfamiliar adult, how often did the baby never “warm up” to the unfamiliar adult?</li>
<li>40. When in the presence of several unfamiliar adults, how often did the baby cry?</li>
<li>41. When in the presence of several unfamiliar adults, how often did the baby continue to be upset for 10 minutes or longer?</li>
<li>42. When visiting a new place, how often did the baby show distress for the first few minutes?</li>
<li>43. When visiting a new place, how often did the baby continue to be upset for 10 minutes or more?</li>
<li>44. When your baby was approached by an unfamiliar person when you and your baby were out (for example, shopping), how often did the baby show distress?</li>
<li>45. When your baby was approached by an unfamiliar person when you and your baby were out (for example, shopping), how often did the baby cry?</li>
<li>46R. When an unfamiliar person came to your home or apartment, how often did your baby allow themselves to be picked up without protest?</li>
<li>47. When an unfamiliar person came to your home or apartment, how often did your baby cry when the visitor attempted to pick them up?</li>
</ul>
</p>
</div>
</p>

<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
  <span>
    <span class="text">Scoring Procedures</span>
  </span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<br>
<p>Caregivers are asked to report on the infant’s behaviors on a 7-point Likert scale: 1 [Never], 2 [Very rarely], 3 [Less than half the time], 4 [About half the time], 5 [More than half the time], 6 [Almost always], 7 [Always].</p>

<p>Scale scores, generated for each domain, are the mean score of all scale items applicable to the child as judged by the caregiver (<code>sum of item scores / total # of items</code>). Importantly, this calculation only includes items with scores of 1 through 7: items where the caregiver selects "does not apply" or “choose not to respond" receive no numerical score and are not included in the total number of items for the scale. Items with an “R” are reverse scored and already implemented in the HBCD scoring algorithm.</p>

<p>For additional information, please see the scoring manual for details on items and scales as well as <a href="https://research.bowdoin.edu/rothbart-temperament-questionnaires">Mary Rothbart's Temperament Questionnaires</a>.</p>
</div>
</p>


### MAPS-TL
Multidimensional Assessment Profiles- Temper Loss scale (MAPS-TL) is a well-validated survey assessing irritability that serves as a tool for characterizing the developmental expression of early mental health risk. MAPS-TL measures a range of behaviors that encompass dysregulation, responsiveness to environmental input, and context. Questions inquire about the behaviors of the focal child over the past month. Irritability has been identified as an early dimensional marker of lifespan mental health risk. MAPS-TL aims to delineate the typical-to-atypical spectrum of irritability in early childhood and identify those young children at high probability of subsequent adaptational problems based on problems with dysregulation. 

<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
  <span>
    <span class="text">Scoring Procedures</span>
  </span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<br>
<p>Each of the 17 items for MAPS-TL is answered on a scale of 1 to 6: 1 [Never], 2 [Rarely (Less than once per week)], 3 [Some (1-3) days of the week], 4 [Most (4-6) days of the week], 5 [Every day of the week], 6 [Many times each day]. A **sum score** is generated when the caregiver provides a numerical score of 1 to 6 for at least 9 out of the 17 items. If fewer than 9 items are completed, the score is marked as missing. When responses are available for 9 to 16 items, a prorated score is calculated using the formula: <code>(sum of items answered / number of items answered) * 17</code>.</p>
</div>
</p>

<details class="collapsible references">
  <summary class="references">References</summary>
  <br>
  <ul>  
  <p style="margin-bottom: 0; padding-bottom: 0;"><u>ecPROMIS- Measure-specific (Social Relationships)</u></p>
    <p>Blackwell, C. K., Lai, J.-S., Kallen, M., Bevans, K. B., Davis, M. M., Wakschlag, L. S., & Cella, D. (2022). Measuring PROMIS® Social Relationships in early childhood. <i>Journal of Pediatric Psychology</i>, 47(5), 573–584. <a href="https://doi.org/10.1093/jpepsy/jsac031" target="_blank">https://doi.org/10.1093/jpepsy/jsac031</a></p>  

  <p style="margin-bottom: 0; padding-bottom: 0;"><u>ecPROMIS- General</u></p>
  <p style="margin-bottom: 0; padding-bottom: 0;">(Qualitative Methods)</p>
    <p>Cella, D., Blackwell, C. K., & Wakschlag, L. S. (2022). Bringing PROMIS to Early Childhood: Introduction and quaptative methods for the development of Early Childhood Parent Report instruments. <i>Journal of Pediatric Psychology</i>, 47(5), 500–509. <a href="https://doi.org/10.1093/jpepsy/jsac027" target="_blank">https://doi.org/10.1093/jpepsy/jsac027</a></p>  
    
  <p style="margin-bottom: 0; padding-bottom: 0;">(Psychometric Methods)</p>
    <p>Lai, J.-S., Kallen, M. A., Blackwell, C. K., Wakschlag, L. S., & Cella, D. (2022). Psychometric considerations in developing PROMIS® measures for early childhood. <i>Journal of Pediatric Psychology</i>, 47(5), 510–522. <a href="https://doi.org/10.1093/jpepsy/jsac025" target="_blank">https://doi.org/10.1093/jpepsy/jsac025</a></p>  

  <p style="margin-bottom: 0; padding-bottom: 0;">(Development Rationale)</p>
    <p>Park, C. H., Blaisdell, C. J., & Gillman, M. W. (2022). The NIH ECHO program: An impetus for the development of early childhood PROMIS tools. <i>Journal of Pediatric Psychology</i>, 47(5), 497–499. <a href="https://doi.org/10.1093/jpepsy/jsac010" target="_blank">https://doi.org/10.1093/jpepsy/jsac010</a></p>  
    </ul>  

<p style="margin-bottom: 0; padding-bottom: 0;"><u>IBQ-R (VSF)+BI</u></p>
	<ul> 
    <p>Gartstein, M. A., & Rothbart, M. K. (2003). Studying infant temperament via the Revised Infant Behavior Questionnaire. <i>Infant Behavior & Development</i>, 26(1), 64–86. <a href="https://doi.org/10.1016/s0163-6383(02)00169-8" target="_blank">https://doi.org/10.1016/s0163-6383(02)00169-8</a></p>  
    <p>Putnam, S. P., Helbig, A. L., Gartstein, M. A., Rothbart, M. K., & Leerkes, E. (2014). Development and assessment of short and very short forms of the infant behavior questionnaire-revised. <i>Journal of Personapty Assessment</i>, 96(4), 445–458. <a href="https://doi.org/10.1080/00223891.2013.841171" target="_blank">https://doi.org/10.1080/00223891.2013.841171</a></p>  
    <p>Rothbart, M. K. (1981). Measurement of temperament in infancy. <i>Child Development</i>, 52(2), 569–578. <a href="https://doi.org/10.1111/j.1467-8624.1981.tb03082.x" target="_blank">https://doi.org/10.1111/j.1467-8624.1981.tb03082.x</a></p>  
  </ul>  

<p style="margin-bottom: 0; padding-bottom: 0;"><u>MAPS-TL</u></p>
  <p>Krogh-Jespersen, S., Kaat, A. J., Petitclerc, A., Perlman, S. B., Briggs-Gowan, M. J., Burns, J. L., Adam, H., Nili, A., Gray, L., &amp; Wakschlag, L. S. (2022). Calibrating temper loss severity in the transition to toddlerhood: Implications for developmental science. <em>Applied Developmental Science</em>, 26(4), 785–798. <a href="https://doi.org/10.1080/10888691.2021.1995386">https://doi.org/10.1080/10888691.2021.1995386</a></p>
</details>