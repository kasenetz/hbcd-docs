# Version: BR7.5

<p style="font-size: 1.1em">Release date: November 19, 2024</p>

## New Features
<ul>
<b>BioSpecimen toxicology results:</b> Updated file with USDTL urine toxicology results was added  
<li>'bio' domain prepended for column headers of .tsv table  </li>
<li>'bio' domain prepended for filenames ('bio<em>biosample</em>urine.tsv' &amp; 'bio<em>biosample</em>urine.json')  </li>
<li>'participant' and 'session_id) included  </li>
<li>1,232 entries in the file (559 entries filtered out)  </li>
<li>'-999' values were not removed  </li>
<li>Accompanying Data Dictionary is set as placeholder (Not yet updated with Data Dictionary provided). To be updated for BR8 or upcoming iterations.  </li>
</ul>

<ul>
<b>Basic Demographics:</b> Renamed demographic fieldnames to make it more clear what the source of the data is (Ripple vs REDCap)
<li><strong>Ripple:</strong>
<ul>
<li>Mother - 'Demographics Screener' (adm<em>bm</em>screen): 'screen<em>race'; 'screen</em>ethnicity'; 'screen<em>race</em>multi' (to be further specified with 'mother' for BR8)  </li>
<li>Child - Session table (LORIS backend): 'child<em>race'; 'child</em>ethnicity' (currently set to 'n/a')  </li></ul>
</li>
<li><strong>REDCap:</strong>
<ul>
<li>Mother/Child - 'Demographics' form (sed<em>bm</em>demo): 'rc<em>mother</em>race'; 'rc<em>mother</em>ethnicity'; rc<em>child</em>race'; 'rc<em>child</em>ethnicity'</li></ul>
</li>
</ul>

## Counts
* **Total number of unique participants and visits included in data dump:** 1,395
* **Total number of visits:**   
    * All: 1,919
    * V01: 1,127 (185 participants for which only V01 visit exists)
    * V02: 666
    * V03: 126  
