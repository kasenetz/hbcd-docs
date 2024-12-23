# Phenotype BIDS Data

The `phenotype/` folder includes instrument data, visit data, biosample, and demographics information for all participants, each of which include a `tsv` data file and associated `json` file with explanation of the data fields. 
```
root/
|__ phenotype/
    |__ phenotype.tsv
    |__ phenotype.json
    |
# BioSpecimens
    |__ bio_biosample_urine.tsv
    |__ bio_biosample_urine.json
    |__ bio_biosample_nails.tsv
    |__ bio_biosample_nails.json
    |  
# Visit Data
    |__ par_visit_data.tsv
    |__ par_visit_data.json
    |
# Demographic Data
    |__ sed_basic_demographics.tsv
    |__ sed_basic_demographics.json
    |
# Instruments
    |__ <instrument_name>.tsv (repeat for all selected instruments)
    |__ <instrument_name>.json (repeat for all selected instruments)
```

## Demographics Data
<p style="margin: 0 0 5px;">The <code>sed_basic_demographics</code> files contain demographics data of each participant useful with phenotype context, including:</p>
<ul>
<li>Gestational age at birth</li>
<li>Sex</li>
<li>Recruitment site</li>
<li>Child demographics: race, ethnicity</li>
<li>Mother demographics: race, ethnicity, education, language at home</li>
<li>Substance Use (SU) flags raised by any of the following (to see the detail per visit, consult the Visit Data section):
    <ul>
    <li>Self-reported use (<a href="../../measures/pregexp/substanceuse_all/#tlfb">TLFB</a>)</li>
    <li>Biospecimen results</li>
    <li>Health-V2 instrument <em>pex_bm_healthv2_inf</em> (field “007”) if option 1 (NOWS - Neonatal Opioid Withdrawal Syndrome) or 5 (FAS - Fetal Alcohol Syndrome) was selected</li>
    </ul>
</li>
</ul>

## Visit Data
<p style="margin: 0 0 5px;">The <code>par_visit_data.tsv|json</code> files contain all participant visit data, including:</p>
<ul>
<li>Visit information (Label, Stage, Date, and if the visit was missed and the reason)</li>
<li>Project, Cohort, and Site</li>
<li>Withdrawal (if the participant withdrew from the study, the reason, and date) and Protocol violation (if there was a protocol exception and the date) information</li>
<li>Substance Use (SU) flags from three locations:
    <ul>
    <li>Self-reported use (<a href="../../measures/pregexp/substanceuse_all/#tlfb">TLFB</a>)</li>
    <li><a href="../../measures/pregexp/infanthealth">Health-V2</a></li>
    <li><a href="../../measures/biospecimens/urine">Biosample Urine</a></li>
    </ul>
</li>
</ul>

## BioSpecimens
All BioSpecimen file are prepended with `bio_`. The `bio_biosample_urine` urine files include BioSpecimen USDTL Urine and DCCID, Visit Label, and Scannable code.

## Instrument Data
Each instrument has a `<instrument_name>.tsv` Data Table containing instrument values and a `<instrument_name>.json` Data Dictionary describing instrument fields for all participants.

<p>
<div id="notification-banner" class="notification-banner" onclick="toggleCollapse(this)">
  <span>
    <span class="emoji"><i class="fa-regular fa-lightbulb"></i></span>
    <span class="text">Instruments Included In Current Release</span>
  </span>
  <span class="notification-arrow">▸</span>
</div>
<div class="notification-collapsible-content">
<ul>
<li>mh_cg_ibqr </li>
<li>mh_cg_mapdb__inf </li>
<li>mh_cg_pms__cc__inf</li>
<li>ncl_cg_spm2__inf</li>
<li>ncl_ch_mlds.tsv  </li>
<li>nt_ch_sens__qtn_1 </li>
<li>nt_ch_sens__qtn_2 </li>
<li>nt_ch_sens__qtn_3</li>
<li>pex_bm_apa</li>
<li>pex_bm_assistv1</li>
<li>pex_bm_assistv2</li>
<li>pex_bm_assistv3</li>
<li>pex_bm_epds</li>
<li>pex_bm_health_preg__chroncond</li>
<li>pex_bm_health_preg__erhosp</li>
<li>pex_bm_health_preg__exp__vacc </li>
<li>pex_bm_health_preg__healthhx</li>
<li>pex_bm_health_preg__illness </li>
<li>pex_bm_health_preg__meds</li>
<li>pex_bm_healthv2_inf</li>
<li>pex_bm_healthv2_preg</li>
<li>pex_bm_psych </li>
<li>pex_bm_str__ptsd  </li>
<li>ph_cg_phx__bfh</li>
<li>ph_ch_anthro</li>
<li>sed_bm_bfy</li>
<li>sed_bm_ehits</li>
<li>sed_bm_nbhsaf</li>
<li>sed_bm_paces</li>
<li>sed_bm_phx__discr</li>
<li>sed_bm_strsup </li>
<li>sed_cg_foodins</li>
<li>sens_ch_setup</li>
</ul>
</div>
</p>

