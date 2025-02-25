# Data Measures & Quality Control

## Data Measure Release Notes
The current release includes data from Visits 1, 2, and 3 (V01, V02, and V03). In this section we provide a brief overview of each data measure provided in the data release, including, where applicable, details of implementation and data collection, scoring procedures, quality control procedures, known issues, and references.
![](../images/timeline-img.png)

Below is a summary of measures included in Release 1.0. Note that the HBCD Data Release Docs only cover the measures currently available, with additional documentation to follow in future updates as additional measure data are released. For details on upcoming additions in Release 1.1, see [Pending & Upcoming Updates](../changelog/pending.md). Full study protocols are available on the [HBCD Study site](https://hbcdstudy.org/study-protocols/).

<p>
<div class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Visit numbers are labeled as Visit X or V0X in the release notes (e.g., V01 = Visit 1)</span>
</div>
</p>

### [Behavior & Caregiver-Child Interaction](behCGinteraction.md)
<table style="width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 14px;">
  <thead>
  </tr>
  <tr>
    <tr>
      <th style="width: 40%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 12px;">Name of Instrument</th>
      <th style="width: 15%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 12px;">Acronym</th>
      <th style="width: 30%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 12px;">Construct</th>
      <th style="width: 15%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 12px;">Table Name</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#ecpromis-child-caregiver-interaction">Early Childhood Patient-Reported Outcome Measurement Information System Child/Caregiver Relationship Scale</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ecPROMIS</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Relationships</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_pms__cc__inf</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#ibq-r-very-short-form-behavioral-inhibition">Infant Behavior Questionnaire &ndash; Revised Very Short Form + Behavior Inhibition</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">IBQ-R (VSF)+BI</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Temperamental Surgency/Extraversion, Negative Affectivity, Effortful Control, and Behavioral Inhibition</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_ibqr</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#maps-tl">Multidimensional Assessment Profiles - Temper Loss scale</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MAPS-TL</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Irritability</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_mapdb__inf</td>
  </tr>
  <tr>
  </tbody>
  </table>
  
### Phenotypic & Behavioral Data
The data provided within the `phenotype/` folder includes demographic, toxicology, and measure instrument data - see [Phenotype BIDS Data](../datacuration/phenotypes.md) under the [HBCD BIDS Data](../datacuration/overview.md) section of the Release Notes for details. The data provided for these measures include the following instruments as well as tabulated data associated with the instruments detailed under [Imaging, Spectroscopy, EEG, & Accelerometry](#imaging-spectroscopy-eeg-accelerometry).



<table style="width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 14px;">
  <thead>
    <tr>
      <th style="width: 40%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Name of Instrument</th>
      <th style="width: 15%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Acronym</th>
      <th style="width: 30%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Construct</th>
      <th style="width: 15%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Table Name</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Behavior & Caregiver-Child Interaction (<a href="behCGinteraction">Main Page</a> )
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#ecpromis-child-caregiver-interaction">Early Childhood Patient-Reported Outcome Measurement Information System Child/Caregiver Relationship Scale</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ecPROMIS</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Relationships</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_pms__cc__inf</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#ibq-r-very-short-form-behavioral-inhibition">Infant Behavior Questionnaire &ndash; Revised Very Short Form + Behavior Inhibition</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">IBQ-R (VSF)+BI</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Temperamental Surgency/Extraversion, Negative Affectivity, Effortful Control, and Behavioral Inhibition</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_ibqr</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/behCGinteraction/#maps-tl">Multidimensional Assessment Profiles - Temper Loss scale</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MAPS-TL</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Irritability</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">mh_cg_mapdb__inf</td>
  </tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Biospecimens & Omics (<a href="biospec">Main Page</a>)
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../measures/biospec/#nails">Nails Toxicology Screen</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Nails</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Toxicology Screen</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">bio_biosample_nails</td>
  </tr>
  <tr>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../measures/biospec/#urine">Urine Toxicology Screen</a></td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Urine</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Toxicology Screen</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">bio_biosample_urine</td>
  </tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Demographics
    </td>
  </tr>
  <tr>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;"><a href="../measures/demographics">HBCD Demographics V01</a></td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">Demographics</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Basic social characteristics related to the birthing parent, the other biological parent, and their household</td>
      <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">sed_basic_demographics</td>
  </tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Neurocognition & Language (<a href="neurocog">Main Page</a>)
    </td>
  </tr>
  <tr>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/neurocog/#mlds">Multilingual Language Development Screener</a></td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MLDS</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Multilingual exposure</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ncl_ch_mlds</td>
  </tr>
  <tr>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/neurocog/#spm-2">Sensory Processing Measure – Infant/Toddler</a></td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">SPM-2</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Sensory processing</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ncl_cg_spm2__inf</td>
  </tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Novel Technologies & Wearable Sensors (<a href="sensors">Main Page</a>)
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/sensors/#infant-sensor-questionnaire">Infant Sensor Questionnaire</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">N/A</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Motor behavior, physical activity, sleep</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nt_ch_sens__qtn_1</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/sensors/#infant-sensor-questionnaire">Infant Sensor Questionnaire</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">N/A</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Motor behavior, physical activity, sleep</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nt_ch_sens__qtn_2</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/sensors/#infant-sensor-questionnaire">Infant Sensor Questionnaire</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">N/A</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Motor behavior, physical activity, sleep</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nt_ch_sens__qtn_3</td>
  </tr>  
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Physical Health (<a href="physicalhealth">Main Page</a>)
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/physicalhealth/#breastfeeding">Breast Feeding History</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PHENX BF</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Nutrition</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ph_cg_phx__bfh</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/physicalhealth/#food-insecurity">2-item Food Insecurity</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">USDA short form</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Food insecurity</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_cg_foodins</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/physicalhealth/#growth">Height/Weight/Head Circumference</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Growth</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Growth</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ph_ch_anthro</td>
  </tr>  
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Pregnancy & Exposure, Including Substance Use 
    </td>
  </tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      &gt;&gt; Pregnancy & Exposure: <a href="pregexp/preghealth">Pregnancy & Infant Health</a>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthhx</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Pre-pregnancy and pregnancy health</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__healthhx</td>
  </tr>          
  <tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-Exposures and Vaccines</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Vacc</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Vaccines in pregnancy</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__exp__vacc</td>
</tr>    
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-Chronic Conditions</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I chroncond</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Chronic conditions and sexually transmitted infections in pregnancy</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__chroncond</td>
</tr>  
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-Illness</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I illness</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Illness in pregnancy</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__illness</td>
</tr>     
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-ER/Hospitalizations</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I ERhosp</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">ER visit or hospitalization in pregnancy</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__erhosp</td>
</tr>  
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-Medications</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Exp I Meds</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Prescription and over the counter medications in pregnancy</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_health_preg__meds</td>
</tr>  
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Pregnancy Health-V2 (End of Pregnancy)</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthv2 Preg</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Updates information between enrollment and delivery</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_healthv2_preg</td>
</tr>     
<tr>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/preghealth#instrument-details">Infant health- V2</a></td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Healthv2 Inf</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Delivery and birth outcomes</td>
  <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_healthv2_inf</td>
</tr>   
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      &gt;&gt; Pregnancy & Exposure: <a href="pregexp/substanceuse">Substance Use</a>
    </td>
  </tr>
  <tr>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/substanceuse/#assist-v1v2v3">Alcohol, Smoking and Substance Involvement Screening Test V1.0</a></td>
      <td>Assist V1</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Substance use and problematic use before and during pregnancy</td>
      <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_assistv1</td>
  </tr>    
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/substanceuse/#assist-v1v2v3">Alcohol, Smoking and Substance Involvement Screening Test V2.0</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Assist V2</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Substance use during end of pregnancy ( between V1 and delivery) and postnatal (weeks 0-4, between delivery and V2)</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_assistv2</td>
    </tr>    
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/substanceuse/#assist-v1v2v3">Alcohol, Smoking and Substance Involvement Screening Test V3.0</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Assist V3</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Substance use after pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_assistv3</td>
    </tr>   
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/substanceuse/#tlfb">Timeline Follow Back</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">TLFB</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Substance use before and during pregnancy</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_ch_tlfb</td>
    </tr>   
   <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      &gt;&gt; Pregnancy & Exposure: <a href="pregexp/mentalhealth">Mental Health</a>
    </td>
  </tr>
  <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/mentalhealth/#personal-family-psychiatric-history">Personal and family psychiatric history</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">FAM MH</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Personal and family mental health</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_psych</td>
    </tr>            
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/mentalhealth/#apa-12">DSM-5 Self-Rated Level 1 and Level 2 (version 8a) Cross-Cutting Symptom Measure—Adult</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">APA 1/2</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Mental Health</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_apa</td>
    </tr>  
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/mentalhealth/#dsm5-ptsdacute-stress-short-scale">National Stressful Events Survey- PTSD Short Scale/Acute Stress Disorder</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">NSESSS—PTSD/Acute Stress Disorder</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PTSD/acute stress disorder symptom severity</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_str__ptsd</td>
    </tr>      
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/pregexp/mentalhealth/#epds">Edinburgh Postnatal Depression Scale</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">EPDS</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Postnatal depression</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">pex_bm_epds</td>
    </tr>      
  <tr>
  <tr>
    <td colspan="4" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Social & Environmental Determinants (<a href="socenvdet">Main Page</a>)
    </td>
  </tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#babys-first-years">Baby’s First Years – Benefits/Services/Economic Stress</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">BFY</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Benefits/Services/Economic Stress</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_bfy</td>
    </tr>
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#discrimination">PhenX+ Toolkit Discrimination</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PhenX+ Discrimination</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Discrimination</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_phx__discr</td>
    </tr>   
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#ehits">Extended – Hurt, Insult, Threaten, Scream</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">eHITS</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Intimate Partner Violence</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_ehits</td>
    </tr>        
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#neighborhood-safety">PhenX+ Toolkit Neighborhood Safety</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Neighborhood Safety</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Social Determinants of Health</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_nbhsaf</td>
    </tr>          
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#paces">Protective and Compensatory Experience</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PACES</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Protective Factors</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_paces</td>
    </tr>   
    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/socenvdet/#perceived-stresssocial-support">Patient-Reported Outcome Measurement Information System</a></td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">PROMIS</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Perceived Stress/Social Support</td>
        <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sed_bm_strsup</td>
    </tr>   
</tbody>
</table>

### Imaging, Spectroscopy, EEG, & Accelerometry
The release also includes raw and processed data from magnetic resonance imaging (MRI), spectroscopy (MRS), electroencephalography (EEG), and motion/accelerometry (i.e. [wearable sensor](sensors.md) recordings for leg motion). The file-based data includes raw and processed ("derivative") data formatted to adhere to the Brain Imaging Data Structure (BIDS) standard - see [Raw BIDS Data](../datacuration/rawbids.md) and [Derivatives](../datacuration/derivatives.md) under the [HBCD BIDS Data](../datacuration/overview.md) section of the Release Notes for details. The tabulated data provided are as follows:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 14px;">
  <tfoot><tr>
    <td colspan="3" style="word-wrap: break-word; white-space: normal;">
        <li><b class="blue-text">&lt;SEG&gt;</b> label: 4S1056Parcels, 4S156Parcels, 4S256Parcels, 4S356Parcels, 4S456Parcels, 4S556Parcels, 4S656Parcels, 4S756Parcels, 4S856Parcels, 4S956Parcels, HCP, Glasser, Gordon, MIDB, MyersLabonte, Tian</li>
        <br>
        <li><b class="blue-text">&lt;PROC&gt;</b> labels: HERCULES_diff1, HERCULES_diff2, HERCULES_sum, unedited_A</li>
    </td></tr>
  </tfoot>
  <thead>
    <tr>
      <th style="width: 20%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Name</th>
      <th style="width: 10%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Acronym</th>
      <th style="width: 30%; border: 1px solid #ddd; padding: 6px; text-align: center; font-size: 16px;">Table Name(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td colspan="3" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Novel Technologies & Wearable Sensors (<a href="sensors">Main Page</a>)
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/sensors/#wearable-sensors">Wearable Sensors</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Channel setup</td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sens_ch_setup</td>
  </tr>
  <tr>
      <td colspan="3" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
        Electroencephalogram (EEG) (<a href="eeg">Main Page</a>)
      </td>
    </tr>  
    <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/eeg/#faces-task">Faces Task</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Face</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">eeg_made_task-FACE_acq-eeg_MADE_preprocessing_report<br>eeg_qc_task-FACE</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/eeg/#auditory-mismatch-negativity-task-mmn">Auditory Mismatch Negativity Task</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MMN</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">eeg_made_task-MMN_acq-eeg_MADE_preprocessing_report<br>eeg_qc_task-MMN</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/eeg/#video-resting-state-rs">Video Resting State Task</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">RS</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">eeg_made_task-RS_acq-eeg_MADE_preprocessing_report<br>eeg_qc_task-RS</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/eeg/#visual-evoked-potential-task-vep">Visual Evoked Potential Task</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">VEP</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">eeg_made_task-RS_acq-eeg_VEP_preprocessing_report<br>eeg_qc_task-VEP<br>eeg_made_task-VEP_ERP-summaryStats</td>
  </tr>
  <tr>
    <td colspan="3" style="border: 1px solid #ddd; padding: 6px; font-weight: bold; background-color: #f0f0f0; text-align: left; font-size: 14px;">
      Magnetic Resonance Imaging (MRI) & Spectroscopy (MRS) (<a href="mri">Main Page</a>)
    </td>
  </tr>  
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/mri/smri">Structural MRI</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">sMRI</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">
    img_brainswipes_xcpd-T1w<br>img_brainswipes_xcpd-T2w<br>img_mriqc_T1w<br>img_mriqc_T2w<br>
    img_bibsnet_space-T1w_desc-aseg_volumes<br>
    img_bibsnet_space-T2w_desc-aseg_volumes<br>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/mri/fmri">Functional MRI</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">fMRI</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">img_brainswipes_xcpd-bold<br>img_mriqc_bold<br>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-alff_bold  </li>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-coverage_bold  </li>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-mean_desc-curv_morph  </li>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-mean_desc-sulc_morph  </li>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-mean_desc-thickness_morph  </li>
    <li>img_xcpd_space-fsLR_seg-<span class="blue-text">&lt;SEG&gt;</span>_stat-reho_bold  </li></td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/mri/dmri">Diffusion MRI</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">dMRI</td>
    <td>img_brainswipes_qsiprep-dwi</td>
  </tr>
    <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/mri/qmri">Quantitative MRI</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">qMRI</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="../measures/mri/mrs">Magnetic Resonance Spectroscopy</a></td>
    <td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">MRS</td>
    <td colspan="2" rowspan="1" style="word-wrap: break-word; white-space: normal;">
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1  </li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_AlphaCorrWaterScaled_Voxel_1_Basis_1</li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_CSFWaterScaled_Voxel_1_Basis_1</li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_TissCorrWaterScaled_Voxel_1_Basis_1</li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_rawWaterScaled_Voxel_1_Basis_1</li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_amplMets_Voxel_1_Basis_1  </li>
      <li>img_osprey_<span class="blue-text">&lt;PROC&gt;</span>_tCr_Voxel_1_Basis_1  </li>
      <li>img_osprey_HERCULES_qm_processed_spectra</li>
      <li>img_osprey_unedited_qm_processed_spectra</li></td>
  </tr>
</tbody>
</table>

## ReproSchema
### What is ReproSchema?
ReproSchema is both a standardized schema and a software platform for managing questionnaires in research studies: As a schema, it provides a structured format for organizing questionnaires, ensuring consistency across different timepoints and studies. As a platform, it offers tools to:  

- Store and version questionnaires  
- Track changes over time  
- Access specific versions  
- Compare different versions  
- Document modifications

For more information about reproschema, please visit [https://www.repronim.org/reproschema/](https://www.repronim.org/reproschema/).

<div style="padding: 0;">In the HBCD Study, ReproSchema ensures all questionnaires are:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
  <ul>
<li>Consistently structured  </li>
<li>Properly versioned  </li>
<li>Easily accessible  </li>
<li>Traceable across releases</li>
</div>

### Quick Start Guide
- Each data release has its own set of questionnaire versions  
- Access questionnaires through the data portal: [https://github.com/ReproNim/hbcd-loris2reproschema](https://github.com/ReproNim/hbcd-loris2reproschema)  
- Compare versions to understand changes over time

### Overview
<div style="padding: 0;">
  ReproSchema manages questionnaire changes across data releases. Changes may include:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
    <li>Fixing typos</li>
    <li>Adjusting answer choices</li>
    <li>Modifying question order</li>
    <li>Adding/removing questions</li>
  </ul>
</div>

<div style="padding: 0;">
  Each change is tracked and documented, allowing you to:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>View exact questions used at any timepoint  </li>
<li>Compare versions between releases  </li>
<li>Match responses to specific question versions  </li>
<li>Analyze data consistently across timepoints</li>
</ul>
</div>

<div id="age" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Example: A sleep quality question changed between Release 1.0 and 2.0</span>
</div>
<div class="collapsible-content">
<p>Release 1.0: "How many hours do you usually sleep?"</p> 
<p>Release 2.0: "In the past month, how many hours do you usually sleep per night?"</p>
</div>

### Structure  

**Protocol → Activity → Item hierarchy**

<div style="padding: 0;">Protocol
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Full study collection  </li>
<li>Contains all questionnaires (15 total)  </li>
<li>Version matches data release</li>
</div>

<div style="padding: 0;">Activity (Questionnaires)
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Individual assessments  </li>
<li>Examples: PHQ-9, GAD-7  </li>
<li>Track additions/removals</li>
</div>

<div style="padding: 0;">Items (Questions)
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Individual questions  </li>
<li>Track wording changes  </li>
<li>Track response option changes  </li>
<li>Track skip pattern updates</li>
</div>

### Accessing Questionnaires

<div style="padding: 0;">Step-by-step guide:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Find your data release version    </li>
<li>Go to [PORTAL_URL]   </li>
<li>Select version from dropdown  </li>
<li>View/download questionnaires</li>
</div>

<div style="padding: 0;">Each questionnaire package includes:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Questions  </li>
<li>Response options  </li>
<li>Skip patterns  </li>
<li>Scoring instructions  </li>
<li>Change history</li>
</div>

<div style="padding: 0;">Available formats:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>JSON (programmatic access)</li>
</div>

### Tracking Change
View what changed between versions via [LINK]

<div style="padding: 0;">Changes are clearly documented, including but not limited to:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
<li>Question text updates  </li>
<li>Response option modifications  </li>
<li>Skip pattern adjustments  </li>
<li>Question additions/removals  </li>
<li>Implementation dates</li>
</div>

Need help? Open an issue on [GitHub](https://github.com/ReproNim/hbcd-loris2reproschema)


