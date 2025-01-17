# Phenotype BIDS Data
The `phenotype/` folder includes instrument data, visit data, biosample, and demographics information for all participants, each of which include a `tsv` data file and associated `json` file with explanation of the data fields. 
```
root/
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
    |__ adm_bm_screen.tsv
    |__ adm_bm_screen.json
    |__ sed_bm_demo.tsv
    |__ sed_bm_demo.json
    |
  # Instruments
    |__ <instrument_name>.tsv (repeat for all selected instruments)
    |__ <instrument_name>.json (repeat for all selected instruments)
```

<p>
<div id="age" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Fields Reporting Age</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<li>
<p><b>Gestational Age at Administration</b> (<code>gestational_age</code>, reported in days): During the prenatal period, gestational age at administration (GAA) refers to the time elapsed between the expected due date (EDD, used as a proxy for the time of conception, or the first day of the mother's last menstrual period (LMP)) and the date of administration of the instrument. Note that GAA can be negative for instruments administered before the EDD.</p> 
<p><b>Gestational Age at Birth</b> (<code>gestational_age_birth</code>, reported in weeks): After birth, the gestational age at birth (GAB) represents the time between conception and birth and remains constant.</p> 
<p><b>Candidate Age at Administration</b> (<code>candidate_age</code>, reported in years with precision to 3 decimal places): This is the time elapsed between birth (based on a birthdate measure jittered up to 7 days to mitigate identification risks) and the date of instrument administration. For a given participant and visit, candidate age will vary by no more than 0.082 years (equivalent to 30 days) across all protocol elements. For visit V01, candidate age is recorded as "n/a" because this data corresponds to the prenatal period. The decision to report age in years, rather than months, ensures consistency with how this variable will be reported at later developmental stages (e.g., toddlerhood and childhood). Reporting in years with three decimal places provides greater precision, compensating for the adjusted birthdate and yielding values closer to the actual age than reporting in years and months.</p>
</li>
</div>
</p>

## Demographics Data
<p style="margin: 0 0 5px;">The <code>sed_basic_demographics</code> files provide demographic information for each participant that is useful for understanding their phenotypic data in context. This includes:</p>
<ul>
<li>Gestational age at birth</li>
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

Caregiver Type is included in demographic information as well. The cohort types included in the data release are as follows:
<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Caregiver Type</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Definition</th>   
    </tr>
  </thead>
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

## Visit Data
<p style="margin: 0 0 5px;">The <code>par_visit_data</code> files contain all participant visit data, including:</p>
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
Each instrument has a `<instrument_name>.tsv` Data Table containing instrument values and a `<instrument_name>.json` Data Dictionary describing instrument fields for all participants.
<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
  <span class="text">Instruments Included In Current Release</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<ul>
<p style="margin-bottom: 0; padding-bottom: 0;"><u>Phenotype Data:</u></p>
<li>mh_cg_<b>&lt;ibqr | mapdb__inf | pms__cc__inf&gt;</b></li>
<li>ncl_<b>&lt;cg_spm2__inf | ch_mlds&gt;</b></li>
<li>nt_ch_sens__qtn_<b>&lt;1 | 2 | 3&gt;</b> </li>
<li>pex_bm_<b>&lt;apa | assistv1 | assistv2 | assistv3 | epds | psych | str__ptsd&gt;</b> </li>
<li>pex_bm_health_preg__<b>&lt;chroncond | erhosp | exp__vacc | healthhx | illness | meds&gt;</b></li>
<li>pex_bm_healthv2_<b>&lt;inf | preg&gt;</b></li>
<li>ph_<b>&lt;cg_phx__bfh | ch_anthro&gt;</b> </li>
<li>sed_bm_<b>&lt;bfy | ehits | nbhsaf | paces | phx__discr | strsup&gt;</b></li>
<li>sed_cg_foodins</li>
<li>sens_ch_setup</li>
</ul>

<ul>
<p style="margin-bottom: 0; padding-bottom: 0;"><u>EEG:</u></p>
<li>eeg_made_task-<b>&lt;FACE | MMN | RS | VEP&gt;</b>_acq-eeg_MADE_preprocessing_report  </li>
<li>eeg_made_task-VEP_ERP-summaryStats  </li>
<li>eeg_qc_task-<b>&lt;FACE | MMN | RS | VEP&gt;</b></li>
</ul>

<ul>
<p style="margin-bottom: 0; padding-bottom: 0;"><u>MRI Derivatives:</u></p>
<li>img_bibsnet_space-<b>&lt;T1w | T2w&gt;</b>_desc-aseg_volumes  </li>
<li>img_mriqc_<b>&lt;T1w | T2w&gt;</b>  </li>
<li>img_mriqc_bold  </li>
<li>img_osprey_<b>&lt;PROC&gt;</b>_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1  </li>
<li>img_osprey_<b>&lt;PROC&gt;</b>_<b>&lt;AlphaCorr|CSF|TissCorr|raw&gt;</b>WaterScaled_Voxel_1_Basis_1</li>
<li>img_osprey_<b>&lt;PROC&gt;</b>_amplMets_Voxel_1_Basis_1  </li>
<li>img_osprey_<b>&lt;PROC&gt;</b>_tCr_Voxel_1_Basis_1  </li>
<li>img_osprey_HERCULES_qm_processed_spectra</li>
<li>img_osprey_unedited_qm_processed_spectra</li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-alff_bold  </li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-coverage_bold  </li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-mean_desc-curv_morph  </li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-mean_desc-sulc_morph  </li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-mean_desc-thickness_morph  </li>
<li>img_xcpd_space-fsLR_seg-<b>&lt;SEG&gt;</b>_stat-reho_bold  </li>
</ul>
<li><b>PROC</b> = HERCULES_diff1, HERCULES_diff2, HERCULES_sum, unedited_A</li>
<li><b>SEG</b> = 4S1056Parcels, 4S156Parcels, 4S256Parcels, 4S356Parcels, 4S456Parcels, 4S556Parcels, 4S656Parcels, 4S756Parcels, 4S856Parcels, 4S956Parcels, HCP, Glasser, Gordon, MIDB, MyersLabonte, Tian</li>
<br>
</div>
</p>