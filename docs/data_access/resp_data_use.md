# Responsible Data Use

## Rationale
The HEALthy Brain and Child Development (HBCD) study dataset is a large, rich, and complex resource that can drive scientific discovery, provide a foundation for translation and implementation research, and inform development of public policy. To create this dataset, thousands of participants have given generously of their time and their bodies to help advance science. They have trusted us with sensitive information. The use of HBCD data carries ethical responsibilities to minimize risks of harm to participants and to treat them respectfully and justly. One way data users can respect participants’ contributions is by conducting careful, high-quality science.  

## Warnings
To facilitate responsible data use, warnings have been added to some variables in the data dictionary and are linked to sections of the release notes/readthedocs webpage to provide additional information for data users. We recommend that all data users:

1.    	Review the data warnings for any variable that you will be downloading and/or using by clicking the link and reviewing the warning associated with that variable
2.    	Review any resources and citations included with the warning and follow recommended guidelines
3.    	Reach out to the HBCD Responsible Use of Data Committee (RUDC) chair Pilar Ossorio (pnossorio@wisc.edu) with any questions about data warnings or responsible data use.
 
There are 2 types of warnings, both of which may aid in more scientifically rigorous use of HBCD data:

<p>
<div id="warning-banner" class="warning-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fas fa-exclamation-triangle"></i></span>
  <span class="text">Data Warning</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<p>The purpose of this warning is to improve transparency and offer technical assistance by alerting the user to issues of data quality, providing information on how variables were constructed, providing instructions on how to calculate or analyze specific variables, or providing code (if necessary).</p> 
</div>
</p>

<p>
<div id="alert-banner" class="alert-banner" onclick="toggleCollapse(this)">
    <span class="emoji"><i class="fas fa-exclamation-circle"></i></span>
    <span class="text">Responsible Use Warning</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<br>
<p>The purpose of this warning is to offer guidance for research design, data interpretation, and communication of findings. These warnings also include conceptual information (e.g., difference between sex assigned at birth and gender identity, the possibility of bias due to attrition or non-response).</p>
</div>
</p>

## Recommendations for Rigorous, Reproducible, and Responsible Data Use
The HBCD Responsible Use of Data Committee (RUDC) provides the following guidance for researchers planning to use HBCD data:

### Learn and abide by the provisions of the Data Use Certificate.
- All users of HBCD data should be listed on a Data Use Certificate (DUC) and bound by it. Among other things, the DUC prohibits any attempt to establish the identities of HBCD participants. To protect participants against identification, users agree to adhere to a minimum cell threshold of ten participants in publications and other public presentations.  Epidemiologists, statisticians, and other data analysts argue that a cell size between 1 and 10 is usually too small for meaningful analysis; therefore, avoiding analysis of small cells can produce more rigorous, reproducible science and also helps protect study participants from identification.   

- Access to HBCD data is limited to people who are listed on an active HBCD DUC.  This means you cannot enter HBCD data into a generative AI tool/large language model, such as ChatGPT, because doing so would leak HBCD data to people who do not have a DUC (see [FAQ: Can I Use ChatGPT...](../faq.md/#faq-ai)).  

### Consider ethical principles throughout the research process.
- Regulations for the protection of humans in federally-funded research (e.g., 45 C.F.R. 46) do not require IRBs to oversee research using anonymized data obtained from a repository.  Nonetheless, the data come from people to whom we have ethical obligations, including obligations of respect, minimizing harm, and justice. Data users should keep these principles in mind at each stage of their research.  Investigators in the Adolescent Brain Cognitive Development (ABCD) study developed [reflection questions](https://osf.io/pm7sy/) that may help researchers incorporate ethical considerations into their projects (Bodison et al., 2023). Researchers planning to use HBCD Study data are encouraged to reflect on these questions during their work. https://osf.io/pm7sy/  

### Use non-stigmatizing language in scientific communications.
- Use clear and respectful language when describing people whose data you analyzed. Person-first language emphasizes individuals’ inherent value and respects them as people before describing any conditions or diseases they may have ([Bares et al., 2023](https://doi.org/10.1093/cid/ciad055)). For example, consider using “person with a substance use disorder” or “person in recovery from a substance use disorder” and avoid referring to participants as “addicts,” “users,” or “former users.”  Avoid terms such as “drug baby” or “crack baby” in favor of descriptions such as “Infant with prenatal substance exposure” or “infant with neonatal opioid withdrawal syndrome.”   

<div style="padding: 0;">
  Recommendations for language regarding people with substance use disorders:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
    <li><a href="https://nida.nih.gov/nidamed-medical-health-professionals/health-professions-education/words-matter-terms-to-use-avoid-when-talking-about-addiction">Words Matter - Terms to Use and Avoid When Talking About Addiction</a></li>
    <li><a href="https://doi.org/10.1111/acer.14840">Why language matters in alcohol research: Reducing stigma (Shi et al. 2022)</a></li>
  </ul>
</div>

<div style="padding: 0;">
Recommendations for writing and talking about Fetal Alcohol Spectrum Disorder:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
    <li><a href="https://canfasd.ca/wp-content/uploads/publications/CanFASD-Common-Messages-Guide-2023_FINAL-1.pdf">Common Messages: Guidelines for talking and writing about FASD</a></li>
  </ul>
</div>

<div style="padding: 0;">
Recommendations for using language regarding people with disabilities:
  <ul style="margin: 0 0 20px 20px; padding: 0;">
    <li><a href="https://www.cdc.gov/disability-and-health/articles-documents/communicating-with-and-about-people-with-disabilities.html">Communicating With and About People with Disabilities (CDC)</a></li>
  </ul>
</div>

### Use population descriptors thoughtfully and scientifically
- Best practice is to include the right variable for the scientific question. Genetic and/or biological variables are not interchangeable with demographic descriptions. Demographic descriptors should be used when they are scientifically justified and accompanied by clear definitions and rationales.
   
- The National Academies of Sciences, Engineering, and Medicine (NASEM) have recently published a report titled [“Rethinking Race and Ethnicity in Biomedical Research”](https://doi.org/10.17226/27913) (NASEM 2024), which can be downloaded free of charge.  This report emphasizes that race variables are “not a substitute for unseen or unmeasured biological predictors of interest.” (NASEM 2024, Conclusion 5-5). This report also notes that the Office for Management and Budget’s race and ethnicity categories, which must be used for government reporting purposes (e.g., by federal grantees), are a minimum set of categories and need not be used for scientific analyses (NASEM 2024, Conclusion 5-1).  

- NASEM has also published a [report](https://doi.org/10.17226/26902) articulating best practices for using population descriptors in genomics research. Importantly, the report cautions researchers against using race as a proxy for genetic variation or assigning genetic ancestry labels based on race, regardless of whether race was self-identified. In addition, researchers should be mindful of the connotations and impacts of terminology used to label groups and should disclose how they select and assign group labels ([NASEM, 2023](https://doi.org/10.17226/26902)).

### Analyses should reflect the complexity of brain and child development.  Use relevant social and environmental variables (available in the HBCD dataset) as covariates in your analyses.
- It is essential to recognize the diversity of life experiences and environments, acknowledging that human development is a dynamic process influenced by the potential for adaptation and change ([Simmons et al., 2021](https://doi.org/10.1177/09567976211003564)). Studying this complexity requires use of statistical models that include appropriate covariates.  Data users are encouraged to consider contextual information regarding which covariates might confound, modify, or mediate the effect they seek to study (S. Greenland and N. Pearce, 2015).   
- Avoid oversimplifying complex constructs. Constructs such as race, ethnicity, and gender are complex, shaped by historical, cultural, and social factors. These constructs do not refer to fixed, biological categories of people. At every stage of research, investigators should evaluate and decide whether use of such constructs is scientifically justified ([Cardenas-Inguinez & Gonzales, 2024](https://doi.org/10.1038/s41593-024-01608-4), [NASEM, 2024](https://doi.org/10.17226/27913)). 
- Complex constructs, e.g., race, should not be used as proxies for variables such as socioeconomic status, access to healthcare, or environmental exposures. Including social and environmental variables in one’s analysis allows for a more accurate understanding of underlying contributors to outcomes of interest (Hoffman et al., 2022). HBCD has collected data on many social and environmental variables relevant for child development.  For help finding these variables in the dataset or learning how to use them contact Pilar Ossorio (pnossorio@wisc.edu).

### Promoting transparency and reproducibility in research. 
- Transparency in reporting methods and results is essential. A review of ABCD Study manuscripts found that sharing analytic scripts  (e.g., on Github, OSF, Zenodo) and providing detailed information about missing data significantly improved transparency and reproducibility ([Lopez et al., 2024](https://doi.org/10.1016/j.dcn.2024.101408)). We recommend that HBCD data users review the [checklist of recommendations](https://www.sciencedirect.com/science/article/pii/S1878929324000690?via%3Dihub#tbl0010) to improve transparency and reproducibility.
- Researchers should consider features of the data available in HBCD and the strengths and limitations therein and should follow guidance for rigor and reproducibility. [Sarasoga-Harris and colleagues (2022)](https://doi.org/10.1016/j.dcn.2022.101115) have developed a practical guide for researchers and reviewers, including relevant analytical and methodological considerations.



## References
<div class="references">
    <p>Bares, S. H., Marcelin, J. R., Blumenthal, J., & Sax, P. E. (2023). Call to action: Prioritizing the use of inclusive, nonstigmatizing language in scientific communications. Clinical Infectious Diseases: An Official Publication of the Infectious Diseases Society of America, 76(10), 1860–1863. <a href="https://doi.org/10.1093/cid/ciad055">https://doi.org/10.1093/cid/ciad055</a></p>
</div>
<br>




