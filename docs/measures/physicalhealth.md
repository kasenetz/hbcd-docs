# Physical Health Measures

## Instruments
The current data release includes the following Physical Health Measures instruments:

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
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#breastfeeding">Breast Feeding History</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PHENX BF</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Nutrition</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ph_cg_phx_i_bfh</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#food-insecurity">2-item Food Insecurity</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">USDA short form</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Food insecurity</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_cg_foodins</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#growth">Height/Weight/Head Circumference</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Growth</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Growth</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Unknown</td>
  </tr>  
</tbody>
</table>

## Breastfeeding     
Breastfeeding measures initiation, exclusivity, and cessation of breast milk feedings.   

<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Implementation & Data Collection Details</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
    <ul>
      <li><b>Method of Administration</b>: Parent survey (remote)</li>
      <li><b>Pilot Data Dictionary</b>: Breast Feeding History</li>
      <li><b>Spanish Translation</b>: Translated for HBCD by BURG</li>
      <li><b>Child Specific/Unspecific Form</b>: Child Specific</li>
      <li><b>Respondent:</b> Caregiver</li>
      <li><b>Visits</b>: V02, V03, V04, V06, V08 (31-45 months) (<i>Note that survey is only administered if still breastfeeding at prior visit</i>) </li>
      <li><b>Estimated length of time for completion</b>: 1 minute</li>
    </ul>
</div>
</p>

***Potential issues identified by subject matter experts***:    
Users should note that, as breast feeding history is obtained via self-report, it is vulnerable to recall bias concerning the timing of starting and/or stopping breast feeding. In addition, as the data is obtained via a survey, it is likely that missing data will need to be statistically addressed during analysis.

## Food Insecurity
Food Insecurity, based on two items assessing the availability of food, is a screening measure used across many populations indicating risk of food insecurity in the last 12 months. Each question uses the same response options. This measure was modified slightly for HBCD to use gender-neutral terms (children aare referred to as “the child” in place of gendered pronouns) as well as inclusion of "Don't know" as a response option to survey questions. Researchers should be aware that the validated measure uses Yes/No answers and does not account for missing data. 


<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Implementation & Data Collection Details</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
    <ul>
      <li><b>Method of Administration</b>: Remote survey </li>
      <li><b>Pilot Data Dictionary</b>: 2-Item Food Insecurity </li>
      <li><b>Spanish Translation</b>: Translated for HBCD by BURG </li>
      <li><b>Child Specific/Unspecific Form</b>: Child Specific </li>
      <li><b>Respondent:</b> Caregiver </li>
      <li><b>Visits</b>: V02, V03 </li>
      <li><b>Estimated length of time for completion</b>: 1 minute</li>
    </ul>
</div>
</p>

## Growth   
Growth is a standard direct measure of child height or length (in cm), weight (in kg), head circumference (cm). In older children, will also include abdominal circumference (cm).     


<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
    <span class="text">Implementation & Data Collection Details</span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
    <ul>
      <li><b>Method of Administration</b>: Direct measure in person </li>
      <li><b>REDCap Form Name</b>:  </li>
      <li><b>Pilot Data Dictionary</b>: Height/Weight/Head Circumference </li>
      <li><b>Child Specific/Unspecific Form</b>: Child Specific </li>
      <li><b>Visits</b>: V02, V03, V04, V06, V08 (31-45 months) </li>
      <li><b>Estimated length of time for completion</b>: 5 minutes</li>
    </ul>
</div>
</p>

## Quality Control & Known Issues
The QC procedures for all three measures involved monitoring the data dashboard for variable missingness, possible coding errors, scoring verification when needed, and data consistency. If present, any common issues identified with QC or potential issues flagged by subject matter experts are described in the individual measure sections above.

<details class="collapsible references">
  <summary class="references">References</summary>
  <ul>
<p>Hager, E. R., Quigg, A. M., Black, M. M., Coleman, S. M., Heeren, T., Rose-Jacobs, R., Cook, J. T., Ettinger de Cuba, S. A., Casey, P. H., Chilton, M., Cutts, D. B., Meyers, A. F., &amp; Frank, D. A. (2010). Development and validity of a 2-item screen to identify families at risk for food insecurity. <em>Pediatrics</em>, 126(1), e26-32. <a href="https://doi.org/10.1542/peds.2009-3146">https://doi.org/10.1542/peds.2009-3146</a></p>
</ul>
</details>