# Phenotype BIDS Data
The `phenotype/` folder includes instrument data, visit data, biosample, and demographics information for all participants, each of which includes a `tsv` data file and associated `json` file with explanation of the data fields. 
```
bids/
|__ phenotype/
    |__ phenotype.tsv
    |__ phenotype.json
    |
  # BioSpecimen
    |__ bio_biosample_nails.tsv
    |__ bio_biosample_nails.json
    |__ bio_biosample_urine.tsv
    |__ bio_biosample_urine.json
    |  
  # Visit Data
    |__ par_visit_data.tsv
    |__ par_visit_data.json
    |
  # Demographic Data
    |__ sed_basic_demographics.tsv
    |__ sed_basic_demographics.json
    |__ sed_bm_demo.tsv
    |__ sed_bm_demo.json
    |
  # Instruments
    |__ <instrument_name>.tsv (repeat for all selected instruments)
    |__ <instrument_name>.json (repeat for all selected instruments)
```

## Demographics Data
<p>
<div id="demo-age" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Demographics: Fields Reporting Age</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<b>Maternal Age at V01</b> (<code>mother_age_v01</code>): This variable (MAV01) is the birthing parent's age at the date of the visit for V01  (derived from their date of birth reported at Ripple ‘Screening’) . It is reported in years, with two decimal place precision, with fractional years calculated by dividing the total whole months (rounded down) by 12. This variable is static and does not change over time.
<br>
<br>
<b>Maternal Age at Delivery</b> (<code>mother_age_delivery</code>): This variable (MAD) is the birthing parent's age (derived from their date of birth reported at Ripple ‘Screening’) at the time of their child's delivery (date of birth). It is reported in years, with two decimal place precision, with fractional years calculated by dividing the total whole months (rounded down) by 12. This variable is static and does not change over time.
<br>
<br>
<b>Gestational Age at Delivery</b> (<code>gestational_age_delivery</code>): This variable (GAD) is the time elapsed between the first day of the mother’s last menstrual period (LMP; derived from the estimated date of delivery (EDD) minus 280 days) and the child’s date of birth. It is reported in whole weeks, rounded down to the nearest week. This variable is static and does not change over time.
<br>
<br>
</div>
</p>

<p style="margin: 0 0 5px;">The <code>sed_basic_demographics</code> file provide demographic information for each participant that is useful for understanding their phenotypic data in context. This includes:</p>
<ul>
<li>Gestational Age at Delivery</li>
<li>Sex</li>
<li>Recruitment site</li>
<li>Child demographics: race, ethnicity</li>
<li>Mother demographics: race, ethnicity, education, language at home</li>
<li>Substance Use (SU) flags raised by any of the following (<a href="#visit-data">Visit Data</a> contains details per visit):
    <ul>
    <li>Self-reported use (<a href="../../measures/pregexp/substanceuse/#tlfb">TLFB</a>)</li>
    <li><a href="../../measures/biospec">Biospecimen results</a></li>
    <li><a href="../../measures/pregexp/preghealth/#instruments">Health-V2 instrument</a> (<code>pex_bm_healthv2_inf</code>) Field <em>007</em> if option 1 (NOWS - Neonatal Opioid Withdrawal Syndrome) or 5 (FAS - Fetal Alcohol Syndrome) was selected</li>
    </ul>
</li>
</ul>

<p>The <code>sed_bm_demo</code> file contains additional demographic information pertaining to the birth parent collected as part of <a href="../../measures/socenvdet/">Social & Environmental Determinants</a> measures.</p>

Cohort types included in the data release are as follows, with Types E-F indicating [Caregiver Type](#CGtype):

- HBCD Main Child
- HBCD Main Child - Postnatal Recruitment
- HBCD Main Child - Type E-F
- HBCD Multiple Birth - Main Child
- HBCD Multiple Birth - Postnatal Recruitment
- HBCD Multiple Birth - Postnatal Recruitment - Sibling
- HBCD Multiple Birth - Type E-F

<div id="CGtype" class="table-banner" onclick="toggleCollapse(this)">
  <span class="table-text">Caregiver Type Definitions</span>
  <span class="table-arrow">▸</span>
</div>
<div class="table-collapsible-content">
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
<tbody>
	<tr>
		<td>Type A</td>
		<td>Temporary Alternative Caregiver</td>
	</tr>
	<tr>
		<td>Type B</td>
		<td style="word-wrap: break-word; white-space: normal;">Change in Primary Caregiver (Placement Only) Without Change in Legal Custody (But Birth Parent Unable to Complete Visit)</td>
	</tr>
	<tr>
		<td>Type C</td>
		<td>Change in Joint Custody</td>
	</tr>
	<tr>
		<td>Type D</td>
		<td style="word-wrap: break-word; white-space: normal;">Child Removed From Birth Parent and Placed in Foster Care (Change in Placement)</td>
	</tr>
	<tr>
		<td>Type E</td>
		<td>Change in Legal Custody and Placement (e.g. adoption)</td>
	</tr>
	<tr>
		<td>Type F</td>
		<td>Original Consented Parent</td>
	</tr>            
</tbody>
</table>
</div>

## Visit Data
<p style="margin: 0 0 5px;">The <code>par_visit_data</code> file contains all participant visit data, including:</p>
<ul>
<li>Visit information (Label, Stage, Date, and if the visit was missed and the reason)</li>
<li>Project, Cohort, and Site</li>
<li>Withdrawal (if the participant withdrew from the study, the reason, and date) and Protocol violation (if there was a protocol exception and the date) information</li>
<li>Substance Use (SU) flags from three locations:
    <ul>
    <li>Self-reported use (<a href="../../measures/pregexp/substanceuse/#tlfb">TLFB</a>)</li>
    <li><a href="../../measures/pregexp/preghealth/#instrument-details">Health-V2</a></li>
    <li><a href="../../measures/biospec/#urine">Biosample Urine</a></li>
    </ul>
</li>
</ul>

## BioSpecimens
All BioSpecimen file are prepended with `bio_`. The `bio_biosample_urine` urine files include BioSpecimen USDTL Urine and DCCID, Visit Label, and Scannable code. See details of BioSpecimen screens [here](../measures/biospec.md).

## Instrument Data
<p>
<div id="instrument-age" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Instrument-Specific Fields Reporting Age</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<b>Chronological Age at Administration</b> (<code>&lt;instrument_name&gt;_candidate_age</code>): Chronological age is the time elapsed between birth (based on a birthdate measure jittered up to 7 days to mitigate identification risks) and the date of  instrument administration (for V02 onwards). It is reported in years to three decimal places, with fractional years calculated by dividing the total number of days (rounded down) by 365.25. The decision to report age in years, rather than months, ensures consistency with how this variable will be reported at later developmental stages (e.g., toddlerhood and childhood). Reporting in years with three decimal places provides greater precision, compensating for the adjusted birthdate and yielding values closer to the actual age than reporting in years and months.
<br>
<br>
<b>Gestational Age at Administration</b> (<code>&lt;instrument_name&gt;_gestational_age</code>): This variable (GAA) is the time elapsed between the first day of the birthing parent's last menstrual period  (LMP; derived from the estimated date of delivery (EDD) minus 280 days)  and the date the instrument was administered (reported only for V01 visit). GAA is reported in whole weeks, rounded down to the nearest week, and provided for each instrument across all available timepoints. For a given participant and visit, GAA will typically vary by no more than 4 weeks across all protocol elements except in cases where protocol exceptions were granted.
<br>
<br>
<b>Adjusted Chronological Age at Administration</b> (<code>&lt;instrument_name&gt;_adjusted_chronological_age</code>): This variable (ACAA) is the time elapsed between the estimated date of delivery (EDD) and date of instrument administration (for V02 onward). ACAA is reported in whole weeks, rounded down to the nearest week.
<br>
<br>
</div>
</p>

Each instrument has a `<instrument_name>.tsv` Data Table containing instrument values and a `<instrument_name>.json` Data Dictionary describing instrument fields for all participants. For a full list of instrument files included in the release, see the overview section under [Data Measures Release Notes](../measures/index.md#data-measure-release-notes) overview.

