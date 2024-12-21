# Phenotype BIDS Data

The `phenotype/` folder includes instrument data, visit data, biosample, and demographics information for all participants, each of which include a `tsv` data file and associated `json` file with explanation of the data fields. 
```
root/
|__ phenotype/
|   |__ phenotype.tsv
|   |__ phenotype.json
|   |__ biosample_urine.tsv
|   |__ biosample_urine.json
|   |__ sed_basic_demographics.tsv
|   |__ sed_basic_demographics.json
|   |__ visit_data.tsv
|   |__ visit_data.json
|   |__ <instrument_name>.tsv (repeat for all selected instruments)
|   |__ <instrument_name>.json (repeat for all selected instruments)
```

## Demographics Data
<p style="margin: 0 0 5px;">The <code>sed_basic_demographics.tsv|json</code> files contain demographics data of each participant useful with phenotype context, including:</p>
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
<p style="margin: 0 0 5px;">The <code>visit.tsv|json</code> files contain all participant visit data, including:</p>
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

## BioSpecimen Urine Results
The `biosample_urine.tsv|json` files include BioSpecimen USDTL Urine and DCCID, Visit Label, and Scannable code.

## Instrument Data
Each instrument has a `<instrument_name>.tsv` Data Table containing instrument values and a `<instrument_name>.json` Data Dictionary describing instrument fields for all participants.




