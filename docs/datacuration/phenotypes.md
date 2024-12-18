# Phenotype BIDS Data

The `phenotype/` folder includes instrument data, visit data, biosample, and demographics information for all participants. 
```
root/
|__ phenotype/
|   |__ biosample_urine.tsv
|   |__ biosample_urine.json
|   |__ sed_basic_demographics.tsv
|   |__ sed_basic_demographics.json
|   |__ visit_data.tsv
|   |__ visit_data.json
|   |__ <instrument_name>.tsv (repeat for all selected instruments)
|   |__ <instrument_name>.json (repeat for all selected instruments)
```

## BioSpecimen Urine Results
`biosample_urine.tsv|json` 

Include BioSpecimen USDTL Urine and DCCID, Visit Label, and Scannable code.

## Basic Demographics
`sed_basic_demographics.tsv|json`

Files contain demographics data of each participant that are useful for phenotype context. This includes:

- Demographics of the infant/child (gestational age at birth, sex, recruitment site, race, ethnicity)
- Demographics of the mother (race, ethnicity, education, income, language spoken at home)
- Substance Use (SU) flags raised from self-reported use (TLFB), Biospecimen results, and/or the Health-V2 instrument *pex_bm_healthv2_inf* (field “007”) if option 1 (NOWS - Neonatal Opioid Withdrawal Syndrome) or 5 (FAS - Fetal Alcohol Syndrome) was selected.

## Visit Data
`visit_data.tsv|json` 

Files contain all participant visit data, including:

- Visit information (Label, Stage, Date, and if the visit was missed and the reason)
- Project, Cohort, and Site
- Withdrawal (if the participant withdrew from the study, the reason, and date) and Protocol violation (if there was a protocol exception and the date) information
- All SU flags from three locations: ([TLFB](../measures/pregexp/substanceuse_all.md), [Health V2](../measures/pregexp/infanthealth.md), and [Biosample Urine](../measures/biospecimens/urine.md))

## Instrument Data

`<instrument_name>.tsv|json`

Each instrument has a `.tsv` Data Table containing instrument values and a `.json` Data Dictionary describing instrument fields for all participants.



