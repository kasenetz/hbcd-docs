# Version: BR9

<p style="font-size: 1.1em">Release date: December 26, 2024</p>

<ul>
<p style="font-size: 1.1em; margin-bottom: 0px;"><u>Total number of unique participants and visits included in data dump:</u></p>
<li>1,351 unique participants  </li>
<li>1,919 visits  </li>
</ul>

## Bug Fixes
- ‘0’ to Null: Fields with '0' values are no longer passed as 'false' (Blank output)

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
<li>Demographics (sed_bm_demo): <br />
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