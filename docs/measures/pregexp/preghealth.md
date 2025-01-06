# Pregnancy & Infant Health

## Instruments
The current data release for Pregnancy & Exposure, Including Substance Use, includes the following instruments for pregnancy and infant health:

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
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthhx</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pre-pregnancy and pregnancy health</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__healthhx</td>
    </tr>          
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-Vaccines</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Vacc</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Vaccines in pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__exp__vacc</td>
    </tr>    
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-Chronic Conditions</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I chroncond</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Chronic conditions and sexually transmitted infections in pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__chroncond</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-Illness</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I illness</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Illness in pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__illness</td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-ER/Hospitalizations</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I ERhosp</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ER visit or hospitalization in pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__erhosp</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-Medications</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I Meds</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Prescription and over the counter medications in pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__meds</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Pregnancy Health-V2 (End of Pregnancy)</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthv2 Preg</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Updates information between enrollment and delivery</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_healthv2_preg</td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#instrument-details">Infant health- V2</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthv2 Inf</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Delivery and birth outcomes</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_healthv2_inf</td>
    </tr>   
</tbody>
</table>

### Field Exclusions
In the instrument `.tsv` files provided in the release, some fields can have out-of-range values. They are considered “extreme” values and are changed to “n/a.” See [Exclusion Criteria > Phenotypes](../../datacuration/exclusions.md/#phenotypes) for additional information. This filter applies to `pex_bm_healthv2_inf.tsv` as follows:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
<caption style="font-weight: bold; text-align: left; font-style: normal;">Healthv2 Inf (<code>pex_bm_healthv2_inf</code>) Field Exclusions</caption>
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Field</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Exclusion Filter (Values Changed to "n/a")</th>
    </tr>
  </thead>
<tbody>        
    <tr>
        <td>001_i_01</td>
        <td>values > 16</td>
    </tr>     
    <tr>
        <td>001_i_02</td>
        <td>values > 66</td>
    </tr>         
    <tr>
        <td>002</td>
        <td>values outside of range 12-51</td>
    </tr>     
    <tr>
        <td>002_i_01</td>
        <td>values outside of range 30-130</td>
    </tr>         
</tbody>
</table>

## Implementation & Data Collection
Surveys were translated to Spanish for HBCD by [BURG Translations](https://burgtranslations.com/our-services/). All are child-unspecific and completed by the pregnant person with the exception of **Healthv2 Inf**, which is child-specific and completed by either the person who gave birth or primary caregiver. Additional information is as follows:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Administration</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Visits</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Completion Time</th>      
    </tr>
  </thead>
<tbody>
    <tr>
        <td>Pregnancy Health</td>
        <td>Self</td>
        <td>V01</td>
        <td>5 min</td>
    </tr>    
    <tr>
        <td>Pregnancy Health-Vaccines</td>
        <td>Self</td>
        <td>V01</td>
        <td>3 min</td>
    </tr>      
    <tr>
        <td>Pregnancy Health-Chronic Conditions</td>
        <td>Self</td>
        <td>V01</td>
        <td>3 min</td>
    </tr>      
    <tr>
        <td>Pregnancy Health-Illness</td>
        <td>RA</td>
        <td>V01</td>
        <td>3 min</td>
    </tr>          
    <tr>
        <td>Pregnancy Health-ER</td>
        <td>RA</td>
        <td>V01</td>
        <td>5 min</td>
    </tr>       
    <tr>
        <td>Pregnancy Health-Medications</td>
        <td>RA</td>
        <td>V01</td>
        <td>5 min</td>
    </tr>       
    <tr>
        <td>Pregnancy Health-V2</td>
        <td>RA</td>
        <td>V02</td>
        <td>10 min</td>
    </tr>     
    <tr>
        <td>Healthv2 Inf</td>
        <td>RA</td>
        <td>V02</td>
        <td>10 min</td>
    </tr>       
</tbody>
</table>

## Quality Control
For quality control, response distributions were reviewed for outliers. 

## Instrument Details
<p>
<div id="ph-known-issues" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Expert Review: Known Issues and/or Research Considerations</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<p>Subject matter experts note that there are potential issues relating to correct coding for (1) ICD codes from BioPortal ICD (used to capture reason(s) for medication use, ER visits, and hospitalizations), (2) symptom codes from World Health Organization, and (3) medication names from RxNORM. For instruments utilizing these coding systems, it was at times difficult for the participant to name or the RA to correctly find the correct code/name in a databases. The following instruments were impacted:</p> 
 <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Database</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Additional Notes</th>
    </tr>
  </thead>
<tbody>          
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Illness</td>
        <td>BioPortal & WHO</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><small>Coding difficulty noted for use of the ER for normal care (no diagnosis) or false alarms (e.g. thought water broke but it did not), resulting in the use of ‘don’t know.’</small></td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-ER/Hospitalizations</td>
        <td>BioPortal</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><small>None</small></td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Medications</td>
        <td>RxNORM</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><small>No option for preventive use made it difficult to code aspirin use for preeclampsia. Aspirin was specifically moved to the prenatal vitamin section a few months into the study. Some medications were also coded with dose, but this was not asked and should not be used.</small></td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-V2 (End of Pregnancy)</td>    
        <td>BioPortal & RxNORM</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><small>None</small></td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Infant health- V2</td>
        <td>BioPortal & RxNORM</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><small>None</small></td>
    </tr>   
</tbody>
</table>
</div>
</p>

**Instrument details are as follows:**
 <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Information Collected</th>
    </tr>
  </thead>
<tbody>   
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Gravidity and parity, height and weight, pregnancy intentions, use of assisted reproductive technology, start of prenatal care, prenatal vitamin or aspirin use, and secondhand smoke</td>
    </tr>          
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Vaccines</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Receipt of common vaccines in pregnancy and trimester received</td>
    </tr>    
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Chronic Conditions</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Chronic conditions and sexually transmitted infections in pregnancy, including whether they are ongoing or resolved</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Illness</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Covid-19 or other illnesses in pregnancy, including start and stop dates and whether the person had a fever</td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-ER/Hospitalizations</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Occurrence(s) and reason(s) for ER visit(s) or hospitalization(s) during pregnancy</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-Medications</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Medications (prescription or over-the-counter) used since last menstrual period (name, indication, frequency, and start/stop date)</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pregnancy Health-V2 (End of Pregnancy)</td>    
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Updates on prenatal vitamins, aspirin, infections, vaccines, medications (both ongoing and new), and illnesses. Also covers pregnancy complications (e.g., gestational diabetes), labor details, delivery method, place of delivery, and the length of hospital stay.</td>
    </tr>     
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Infant health- V2</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Infant birth weight, length, hospital stay duration, newborn conditions (e.g. neonatal abstinence syndrome), birth defects, genetic diagnoses, NICU admission and stay, intubation, adverse outcomes (e.g. BPD, congenital syphilis), medications (name, indication, status), healthcare access, specialist visits, and newborn hearing test results</td>
    </tr>   
</tbody>
</table>
<br>
