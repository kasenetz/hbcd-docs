# Version: BR9
<p style="font-size: 1.1em">Release date: December 26, 2024</p>

## Bug Fixes
* **‘0’ to Null:** Fields with '0' values are no longer passed as 'false' (Blank output)

## New Features
<ul>
<b>Parquet files set up:</b>
<li>Libraries and dependencies deployed for LORIS core (v26)  </li>
<li>Currently disabled (run under 'skip_parquet' option). No parquet files have been generated yet  </li>
</ul>

<ul>
<b>BioSpecimen toxicology results:</b>   
<li>Ensured content available for USDTL toxicology results file  </li>
<li>Add BioSpecimen metadata based on Data Dictionary provided including:
    <ul>
        <li>Description  </li>
        <li>type_level  </li>
        <li>type_data  </li>
        <li>levels (Option Values/Option Labels)  </li>
    </ul></li>
<li>'Nail Type' fields and DD based on LORIS db values  </li>
</ul>

<ul>
<b>Basic Demographics:</b>   
<li>Included ACS derived fields for screening maternal demographics: 'screen_mother_ethnoracial_acs_multi_by_race' and 'screen_mother_ethnoracial_acs_multi_by_ethnicity'</li>
</ul>

<ul>
<b>Data Dictionary:</b>   
<li>Instruction:
    <ul>
        <li>Added 'instruction' values where applicable (applies for all fields from first instruction to next instruction)  </li>
        <li>Includes disclaimer: [Indicative only, might not be in sync with question]  </li>
    </ul></li>
<li>Candidate age:
<ul>
    <li>Checked that all fields are in 'Years'  </li>
    <li>Provided example in 'label': 'Candidate Age (Years) - e.g. 0.500 = 6 months, 0.250 = 3 months, 0.083 = 1 month'  </li>
</ul></li>
</ul>

## Filters
<ul>
<li>Demographics (sed_bm_demo):<br />
<ul>
<li>Excluded 'table' descriptive fields</li>
<li>Excluded 'Disability' fields</li>
</ul>
</li>
<li>'Height/Weight/Head Circumference' (ph_ch_anthro): 
    <ul>
    <li>Excluded Z-score fields</li>
    </ul></li>
</ul>

## Embedded Instrument Data Files Included
Demographics / Visit Data:

* par_visit_data.json  
* par_visit_data.tsv

* sed_basic_demographics.json  
* sed_basic_demographics.tsv

* adm_bm_screen.json  
* adm_bm_screen.tsv  
* sed_bm_demo.json  
* sed_bm_demo.tsv

BioSpecimens:

* bio_biosample_nails.json  
* bio_biosample_nails.tsv  
* bio_biosample_urine.json  
* bio_biosample_urine.tsv

EEG:

* eeg_made_task-FACE_acq-eeg_MADE_preprocessing_report.json  
* eeg_made_task-FACE_acq-eeg_MADE_preprocessing_report.tsv  
* eeg_made_task-MMN_acq-eeg_MADE_preprocessing_report.json  
* eeg_made_task-MMN_acq-eeg_MADE_preprocessing_report.tsv  
* eeg_made_task-RS_acq-eeg_MADE_preprocessing_report.json  
* eeg_made_task-RS_acq-eeg_MADE_preprocessing_report.tsv  
* eeg_made_task-VEP_ERP-summaryStats.json  
* eeg_made_task-VEP_ERP-summaryStats.tsv  
* eeg_made_task-VEP_acq-eeg_MADE_preprocessing_report.json  
* eeg_made_task-VEP_acq-eeg_MADE_preprocessing_report.tsv  
* eeg_qc_task-FACE.json  
* eeg_qc_task-FACE.tsv  
* eeg_qc_task-MMN.json  
* eeg_qc_task-MMN.tsv  
* eeg_qc_task-RS.json  
* eeg_qc_task-RS.tsv  
* eeg_qc_task-VEP.json  
* eeg_qc_task-VEP.tsv


Phenotype Data:

* mh_cg_ibqr.json  
* mh_cg_ibqr.tsv  
* mh_cg_mapdb__inf.json  
* mh_cg_mapdb__inf.tsv  
* mh_cg_pms__cc__inf.json  
* mh_cg_pms__cc__inf.tsv  
* ncl_cg_spm2__inf.json  
* ncl_cg_spm2__inf.tsv  
* ncl_ch_mlds.json  
* ncl_ch_mlds.tsv  
* nt_ch_sens__qtn_1.json  
* nt_ch_sens__qtn_1.tsv  
* nt_ch_sens__qtn_2.json  
* nt_ch_sens__qtn_2.tsv  
* nt_ch_sens__qtn_3.json  
* nt_ch_sens__qtn_3.tsv  
* pex_bm_apa.json  
* pex_bm_apa.tsv  
* pex_bm_assistv1.json  
* pex_bm_assistv1.tsv  
* pex_bm_assistv2.json  
* pex_bm_assistv2.tsv  
* pex_bm_assistv3.json  
* pex_bm_assistv3.tsv  
* pex_bm_epds.json  
* pex_bm_epds.tsv  
* pex_bm_health_preg__chroncond.json  
* pex_bm_health_preg__chroncond.tsv  
* pex_bm_health_preg__erhosp.json  
* pex_bm_health_preg__erhosp.tsv  
* pex_bm_health_preg__exp__vacc.json  
* pex_bm_health_preg__exp__vacc.tsv  
* pex_bm_health_preg__healthhx.json  
* pex_bm_health_preg__healthhx.tsv  
* pex_bm_health_preg__illness.json  
* pex_bm_health_preg__illness.tsv  
* pex_bm_health_preg__meds.json  
* pex_bm_health_preg__meds.tsv  
* pex_bm_healthv2_inf.json  
* pex_bm_healthv2_inf.tsv  
* pex_bm_healthv2_preg.json  
* pex_bm_healthv2_preg.tsv  
* pex_bm_psych.json  
* pex_bm_psych.tsv  
* pex_bm_str__ptsd.json  
* pex_bm_str__ptsd.tsv  
* ph_cg_phx__bfh.json  
* ph_cg_phx__bfh.tsv  
* ph_ch_anthro.json  
* ph_ch_anthro.tsv  
* sed_bm_bfy.json  
* sed_bm_bfy.tsv  
* sed_bm_ehits.json  
* sed_bm_ehits.tsv  
* sed_bm_nbhsaf.json  
* sed_bm_nbhsaf.tsv  
* sed_bm_paces.json  
* sed_bm_paces.tsv  
* sed_bm_phx__discr.json  
* sed_bm_phx__discr.tsv  
* sed_bm_strsup.json  
* sed_bm_strsup.tsv  
* sed_cg_foodins.json  
* sed_cg_foodins.tsv  
* sens_ch_setup.json  
* sens_ch_setup.tsv

MRI Derivatives:

* img_bibsnet_space-T1w_desc-aseg_volumes.json  
* img_bibsnet_space-T1w_desc-aseg_volumes.tsv  
* img_bibsnet_space-T2w_desc-aseg_volumes.json  
* img_bibsnet_space-T2w_desc-aseg_volumes.tsv  
* img_mriqc_T1w.json  
* img_mriqc_T1w.tsv  
* img_mriqc_T2w.json  
* img_mriqc_T2w.tsv  
* img_mriqc_bold.json  
* img_mriqc_bold.tsv  
* img_osprey_HERCULES_diff1_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_AlphaCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_CSFWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_CSFWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_TissCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_TissCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_amplMets_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_amplMets_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_rawWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_rawWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff1_tCr_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff1_tCr_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_AlphaCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_CSFWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_CSFWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_TissCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_TissCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_amplMets_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_amplMets_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_rawWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_rawWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_diff2_tCr_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_diff2_tCr_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_qm_processed_spectra.json  
* img_osprey_HERCULES_qm_processed_spectra.tsv  
* img_osprey_HERCULES_sum_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_AlphaCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_CSFWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_CSFWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_TissCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_TissCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_amplMets_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_amplMets_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_rawWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_rawWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_HERCULES_sum_tCr_Voxel_1_Basis_1.json  
* img_osprey_HERCULES_sum_tCr_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_AlphaCorrWaterScaledGroupNormed_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_AlphaCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_AlphaCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_CSFWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_CSFWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_TissCorrWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_TissCorrWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_amplMets_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_amplMets_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_rawWaterScaled_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_rawWaterScaled_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_A_tCr_Voxel_1_Basis_1.json  
* img_osprey_unedited_A_tCr_Voxel_1_Basis_1.tsv  
* img_osprey_unedited_qm_processed_spectra.json  
* img_osprey_unedited_qm_processed_spectra.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S1056Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S156Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S256Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S356Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S456Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S556Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S656Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S756Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S856Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-4S956Parcels_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-Glasser_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-Glasser_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-Gordon_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-Gordon_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-HCP_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-HCP_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-HCP_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-HCP_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-HCP_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-HCP_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-MIDB_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-MIDB_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-curv_morph.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-curv_morph.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-sulc_morph.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-sulc_morph.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-thickness_morph.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-mean_desc-thickness_morph.tsv  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-MyersLabonte_stat-reho_bold.tsv  
* img_xcpd_space-fsLR_seg-Tian_stat-alff_bold.json  
* img_xcpd_space-fsLR_seg-Tian_stat-alff_bold.tsv  
* img_xcpd_space-fsLR_seg-Tian_stat-coverage_bold.json  
* img_xcpd_space-fsLR_seg-Tian_stat-coverage_bold.tsv  
* img_xcpd_space-fsLR_seg-Tian_stat-reho_bold.json  
* img_xcpd_space-fsLR_seg-Tian_stat-reho_bold.tsv

## Counts
* **Total number of unique participants and visits included in data dump:** 1,351
* **Total number of visits:** 1,919
