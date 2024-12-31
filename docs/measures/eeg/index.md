# Electroencephalogram (EEG)

EEG tasks are acquired during visits V03, V04, and V06.

![](images/EEG_acquisition_protocol.png)

## EEG Task Details
### Faces Task
The Faces task (v.11.29.23) is used to assess neural activity supporting face and object processing within the first years of life. It assesses child and infant face processing development including attention, perception, categorization, individuation and memory. The measure includes rigorous QC procedures to ensure data integrity and reliability. To assess child and infant face processing abilities as well as the underlying neural activity supporting face and object processing, the task involves 2 blocks: 50 trials of upright faces & 50 trials of inverted faces and 50 trials of upright faces & 50 trials of objects. If the child loses attention, an attention getter may be played to bring the child’s focus back to the task.     
   
**Face task schematic (Face vs. Object)**<br>
![](images/eeg-facetask.png)

ERPs are computed as a function of repeated presentation of faces and objects. The ERPs index different stages of processing including attention, perception, categorization, individuation and memory. The ERP components elicited by the Faces task are the P1, N290, and P400 components. See Fox et al. (2024) for additional information on the rationale for task/stimulus development and ERP findings from pilot data.   

### Auditory Mismatch Negativity Task (MMN)
The Auditory mismatch negativity (MMN) Task (v.11.29.23) provides a comprehensive assessment of infant speech sound processing and includes rigorous QC procedures to ensure data integrity and reliability. The MMN facilitates examining auditory evoked potentials and habituation/dishabituation to auditory stimuli by capturing differences in neural responses to standard (“ba”) and deviant (“da”) stimuli. During auditory presentation of syllables, a video is played on an iPad as a distractor (with brightness all the way up, in airplane mode, and not plugged in). From this task the MMN difference wave is computed, which is also known as the Mismatch Response (MMR). The amplitude/latency of this difference wave has been linked to language (Choudhury & Benasich, 2011), temperament/personality (Gurrera et al., 2001; Marshall et al., 2009), internalizing problems (Reeb-Sutherland et al., 2009), externalizing/attention problems (Gumenyuk et al., 2005), and disorders including autism (Lepistö et al., 2005; Schwartz et al., 2018) and reading ability/dyslexia (Leppänen et al., 2010; Norton, Beach, et al., 2021). See Fox et al. (2024) for more information about the MMN task.   

### Video Resting State (RS)
The Video Resting State (v.11.29.23) task provides assessment of the development of large scale neural networks during infancy and early childhood via information about neural oscillations measured in EEG power across the scalp. Developmental changes in oscillatory activity reflect underlying developing large scale neural networks associated with early self-regulatory, cognitive, and affective processes and developmental outcomes (Gabard-Durnam et al., 2019; E. J. Jones et al., 2020; Whedon et al., 2020). The metrics derived from the resting EEG signal include power across the frequency spectrum (Gabard-Durnam et al., 2019) and relative power between different scalp locations (Davidson & Fox, 1982). See Fox et al. (2024) for more information about the RS.       

In V03, a silent video plays with a variety of colorful and abstract toys and visuals on screen. The child watches the video for the duration of the task:

![](images/eeg-RS-V03.png)
<br>
<br>

In V04/6, a silent video plays with a variety of marble run and construction visuals on screen. The child watches the video for the duration of the task:    
![](images/eeg-RS-V04.png)

***Users should be aware that, as noted in the title, this is not a true resting state as there is a visual stimulus present.***

### Visual Evoked Potential Task (VEP)
The Visual Evoked Potential Task (v.11.29.23) measures development of visual cortex and response to stimuli, reflecting underlying cortical development via measurement of cortical responses to flashing checkerboard visual stimuli, shown for the duration of the task: 
![VEP checkerboard image](images/eeg-vep-checkerboard.png)

VEP amplitude and latency decreases with age during the first three years of life. The VEP has been associated with concurrent and later developmental outcomes as a function of prenatal substance exposures (Margolis et al., 2024), early visual enrichment or deprivation (Jensen et al., 2019), vision system maturation (Lippé et al., 2009), neurodevelopmental disorders (e.g., ASD and ADHD; Cremone- Caira et al., 2023; Nazhvani et al., 2013), and reading and learning disabilities (Shandiz et al., 2017). The morphology of the VEP likely reflects varying degrees of synaptic efficiency and as such, can be used as a readout of general cortical function. The task elicits a VEP response in the occipital area (Oz), consisting of the, N1 (first negative peak), P1 (first positive peak), and N2 (second negative peak) components. See Fox et al. (2024) for more information about the VEP task.  

## Quality Control & Known Issues    
After EEG acquisition, quality control checks are performed using [EEG2BIDS Wizard](https://github.com/aces/eeg2bids), a custom MATLAB application installed at all HBCD sites. These checks are immediately provided to the user to ensure the data's integrity and usability. The process includes:

- Verifying event markers in the EEG data to confirm all required events are accurately recorded.
- Ensuring the setup for stimulus presentation and EEG data acquisition adheres to the study protocol.
- Inspecting electrode impedances to ensure they are within acceptable limits.
- Detecting multiple task runs and incomplete recordings.
- Confirming the use of correct E-Prime task versions.

Both study sites and the EEG Core team use an EEG Quality Control dashboard developed by LORIS to access and monitor incoming EEG data and QC metrics, such as retained epochs and line noise levels. Outputs from the HBCD-Maryland Analysis of Developmental EEG ([HBCD-MADE](https://github.com/DCAN-Labs/HBCD-MADE)) pipeline, which handles preprocessing and data cleaning, are also integrated into the dashboard. These outputs include key metrics like outlier statistics for specific task epochs ([Debnath et al., 2020](https://doi.org/10.1111/psyp.13580)). Regular site-specific check-ins and troubleshooting are conducted to ensure consistent protocol adherence and data quality across sites. For a detailed description of QC procedures in the HBCD Study EEG protocol, refer to [Fox et al. (2024)](https://doi.org/10.1016/j.dcn.2024.101447).

### Potential Issues
During quality control, a frequently observed issue across all tasks was the irregular application of EEG sensors. Additionally, partial task completion due to infant fussing and missing stimulus flags were commonly noted for the faces and auditory mismatch negativity tasks.

Subject matter experts flagged potential issues related to task design changes between versions V03 and V04/6. These include updates to the video content in the video RS task and modifications to the interstimulus interval (ISI) in the auditory mismatch negativity task (see Fox et al., 2024; Morr et al., 2002, for details on the ISI changes). No potential issues were identified for the faces or visual evoked potential tasks.

## Resources
- [HBCD E-Prime Task Manual](https://docs.google.com/document/d/1PghQQpLbxjQavtVlHyIz7JVJxlyKcC4Do8z8j7srdaI/edit?usp=sharing)
- [Official EEG Acquisition Manual](https://docs.google.com/document/d/1tjrFJzntHOqJOrq-SRGy2Z0LOj56MFsZ2ZocgrUogSs/edit?usp=sharing)


<details class="collapsible references">
  <summary class="references">References</summary>
 <br>
 <ul>
 <p><u>Faces Task</u></p>
    <p>Barry-Anwar, R., Riggins, T., & Scott, L. S. (2020). Electrophysiology in developmental populations: Key methods and findings. In K. Cohen Kadosh (Ed.), <i>The Oxford Handbook of Developmental Cognitive Neuroscience</i>. Oxford University Press. <a href="https://doi.org/10.1093/oxfordhb/9780198827474.013.3" target="_blank">https://doi.org/10.1093/oxfordhb/9780198827474.013.3</a></p>  
    <p>Fox, N. A., Pérez-Edgar, K., Morales, S., Brito, N. H., Campbell, A. M., Cavanagh, J. F., Gabard-Durnam, L. J., Hudac, C. M., Key, A. P., Larson-Prior, L. J., Pedapati, E. V., Norton, E. S., Reetzke, R., Roberts, T. P., Rutter, T. M., Scott, L. S., Shuffrey, L. C., Antúnez, M., Boylan, M. R., … Yoder, L. (2024). The development and structure of the Healthy Brain and Child Development (HBCD) study EEG Protocol. <i>Developmental Cognitive Neuroscience</i>, 69, 101447. <a href="https://doi.org/10.1016/j.dcn.2024.101447" target="_blank">https://doi.org/10.1016/j.dcn.2024.101447</a></p>  
    <p>Markant, J., & Scott, L. S. (2018). Attention and Perceptual Learning Interact in the Development of the Other-Race Effect. <i>Current Directions in Psychological Science</i>, <i>27</i>(3), 163–169. <a href="https://doi.org/10.1177/0963721418769884" target="_blank">https://doi.org/10.1177/0963721418769884</a></p>  
    <p>Scherf, K. S., & Scott, L. S. (2012). Connecting developmental trajectories: Biases in face processing from infancy to adulthood. <i>Developmental Psychobiology</i>, <i>54</i>(6), 643–663. <a href="https://doi.org/10.1002/dev.21013" target="_blank">https://doi.org/10.1002/dev.21013</a></p>  

  <p><u>Auditory Mismatch Negativity Task</u></p>
    <p>Choudhury, N., & Benasich, A. A. (2011). Maturation of auditory evoked potentials from 6 to 48 months: Prediction to 3 and 4 year language and cognitive abilities. <i>Clinical Neurophysiology</i>, 122(2), 320–338. <a href="https://doi.org/10.1016/j.clinph.2010.05.035" target="_blank">https://doi.org/10.1016/j.clinph.2010.05.035</a></p>  
    <p>Fox, N. A., Pérez-Edgar, K., Morales, S., Brito, N. H., Campbell, A. M., Cavanagh, J. F., Gabard-Durnam, L. J., Hudac, C. M., Key, A. P., Larson-Prior, L. J., Pedapati, E. V., Norton, E. S., Reetzke, R., Roberts, T. P., Rutter, T. M., Scott, L. S., Shuffrey, L. C., Antúnez, M., Boylan, M. R., … Yoder, L. (2024). The development and structure of the Healthy Brain and Child Development (HBCD) study EEG Protocol. <i>Developmental Cognitive Neuroscience</i>, 69, 101447. <a href="https://doi.org/10.1016/j.dcn.2024.101447" target="_blank">https://doi.org/10.1016/j.dcn.2024.101447</a></p>  
    <p>Gumenyuk, V., Korzyukov, O., Escera, C., Hämäläinen, M., Huotilainen, M., Häyrinen, T., Oksanen, H., Näätänen, R., Von Wendt, L., & Alho, K. (2005). Electrophysiological evidence of enhanced distractibility in ADHD children. <i>Neuroscience Letters</i>, 374(3), 212–217. <a href="https://doi.org/10.1016/j.neulet.2004.10.081" target="_blank">https://doi.org/10.1016/j.neulet.2004.10.081</a></p>  
    <p>Gurrera, R. J., O’Donnell, B. F., Nestor, P. G., Gainski, J., & McCarley, R. W. (2001). The P3 auditory event–related brain potential indexes major personality traits. <i>Biological Psychiatry</i>, 49(11), 922–929. <a href="https://doi.org/10.1016/S0006-3223(00)01067-2" target="_blank">https://doi.org/10.1016/S0006-3223(00)01067-2</a></p>  
    <p>Lachmann, T., Berti, S., Kujala, T., & Schröger, E. (2005). Diagnostic subgroups of developmental dyslexia have different deficits in neural processing of tones and phonemes. <i>International Journal of Psychophysiology</i>, 55(2), 105–120. <a href="https://doi.org/10.1016/j.ijpsycho.2004.11.005" target="_blank">https://doi.org/10.1016/j.ijpsycho.2004.11.005</a></p>  
    <p>Lepistö, T., Kujala, T., Vanhala, R., Alku, P., Huotilainen, M., & Näätänen, R. (2005). The discrimination of and orienting to speech and non-speech sounds in children with autism. <i>Brain Research</i>, 1066(1–2), 147–157. <a href="https://doi.org/10.1016/j.brainres.2005.10.052" target="_blank">https://doi.org/10.1016/j.brainres.2005.10.052</a></p>  
    <p>Leppänen, P. H. T., Hämäläinen, J. A., Salminen, H. K., Eklund, K. M., Guttorm, T. K., Lohvansuu, K., Puolakanaho, A., & Lyytinen, H. (2010). Newborn brain event-related potentials revealing atypical processing of sound frequency and the subsequent association with later literacy skills in children with familial dyslexia. <i>Cortex</i>, 46(10), 1362–1376. <a href="https://doi.org/10.1016/j.cortex.2010.06.003" target="_blank">https://doi.org/10.1016/j.cortex.2010.06.003</a></p>  
    <p>Marshall, P. J., Reeb, B. C., & Fox, N. A. (2009). Electrophysiological responses to auditory novelty in temperamentally different 9-month-old infants. <i>Developmental Science</i>, 12(4), 568–582. <a href="https://doi.org/10.1111/j.1467-7687.2008.00808.x" target="_blank">https://doi.org/10.1111/j.1467-7687.2008.00808.x</a></p>  
    <p>Morr, M. L., Shafer, V. L., Kreuzer, J. A., & Kurtzberg, D. (2002). Maturation of mismatch negativity in typically developing infants and preschool children. <i>Ear and Hearing</i>, 23(2), 118–136. <a href="https://doi.org/10.1097/00003446-200204000-00005" target="_blank">https://doi.org/10.1097/00003446-200204000-00005</a></p>  
    <p>Norton, E. S., Beach, S. D., Eddy, M. D., McWeeny, S., Ozernov-Palchik, O., Gaab, N., & Gabrieli, J. D. E. (2021). ERP mismatch negativity amplitude and asymmetry reflect phonological and rapid automatized naming skills in English-speaking kindergartners. <i>Frontiers in Human Neuroscience</i>, 15, 624617. <a href="https://doi.org/10.3389/fnhum.2021.624617" target="_blank">https://doi.org/10.3389/fnhum.2021.624617</a></p>  
    <p>Reeb-Sutherland, B. C., Vanderwert, R. E., Degnan, K. A., Marshall, P. J., Pérez-Edgar, K., Chronis-Tuscano, A., Pine, D. S., & Fox, N. A. (2009). Attention to novelty in behaviorally inhibited adolescents moderates risk for anxiety. <i>Journal of Child Psychology and Psychiatry</i>, 50(11), 1365–1372. <a href="https://doi.org/10.1111/j.1469-7610.2009.02170.x" target="_blank">https://doi.org/10.1111/j.1469-7610.2009.02170.x</a></p>  
    <p>Schwartz, S., Shinn-Cunningham, B., & Tager-Flusberg, H. (2018). Meta-analysis and systematic review of the literature characterizing auditory mismatch negativity in individuals with autism. <i>Neuroscience and Biobehavioral Reviews</i>, 87, 106–117. <a href="https://doi.org/10.1016/j.neubiorev.2018.01.008" target="_blank">https://doi.org/10.1016/j.neubiorev.2018.01.008</a></p>  

  <p><u>Video Resting State</u></p>
    <p>Davidson, R. J., & Fox, N. A. (1982). Asymmetrical Brain Activity Discriminates Between Positive and Negative Affective Stimuli in Human Infants. <em>Science</em>, 218(4578), 1235–1237. <a href="https://doi.org/10.1126/science.7146906" target="_blank">https://doi.org/10.1126/science.7146906</a></p>
    <p>Fox, N. A., Pérez-Edgar, K., Morales, S., Brito, N. H., Campbell, A. M., Cavanagh, J. F., Gabard-Durnam, L. J., Hudac, C. M., Key, A. P., Larson-Prior, L. J., Pedapati, E. V., Norton, E. S., Reetzke, R., Roberts, T. P., Rutter, T. M., Scott, L. S., Shuffrey, L. C., Antúnez, M., Boylan, M. R., … Yoder, L. (2024). The development and structure of the Healthy Brain and Child Development (HBCD) study EEG Protocol. <em>Developmental Cognitive Neuroscience</em>, 69, 101447. <a href="https://doi.org/10.1016/j.dcn.2024.101447" target="_blank">https://doi.org/10.1016/j.dcn.2024.101447</a></p>
    <p>Gabard-Durnam, L. J., Wilkinson, C., Kapur, K., Tager-Flusberg, H., Levin, A. R., & Nelson, C. A. (2019). Longitudinal EEG power in the first postnatal year differentiates autism outcomes. <em>Nature Communications</em>, 10(1), Article 1. <a href="https://doi.org/10.1038/s41467-019-12202-9" target="_blank">https://doi.org/10.1038/s41467-019-12202-9</a></p>
    <p>Jones, E. J. H., Goodwin, A., Orekhova, E., Charman, T., Dawson, G., Webb, S. J., & Johnson, M. H. (2020). Infant EEG theta modulation predicts childhood intelligence. <em>Scientific Reports</em>, 10(1), 11232. <a href="https://doi.org/10.1038/s41598-020-67687-y" target="_blank">https://doi.org/10.1038/s41598-020-67687-y</a></p>
    <p>Whedon, M., Perry, N. B., & Bell, M. A. (2020). Relations between frontal EEG maturation and inhibitory control in preschool in the prediction of children’s early academic skills. <em>Brain and Cognition</em>, 145, 105636. <a href="https://doi.org/10.1016/j.bandc.2020.105636" target="_blank">https://doi.org/10.1016/j.bandc.2020.105636</a></p>

  <p><u>Visual Evoked Potential Task</u></p>  
    <p>Cremone-Caira, A., Braverman, Y., MacNaughton, G. A., Nikolaeva, J. I., & Faja, S. (2023). Reduced Visual Evoked Potential Amplitude in Autistic Children with Co-Occurring Features of Attention-Deficit/Hyperactivity Disorder. <em>Journal of Autism and Developmental Disorders</em>. <a href="https://doi.org/10.1007/s10803-023-06005-7" target="_blank">https://doi.org/10.1007/s10803-023-06005-7</a></p>
    <p>Fox, N.A., Pérez-Edgar, K., Morales, S., Brito, N. H., Campbell, A. M., Cavanagh, J. F., Gabard-Durnam, L. J., Hudac, C. M., Key, A. P., Larson-Prior, L. J., Pedapati, E. V., Norton, E. S., Reetzke, R., Roberts, T. P., Rutter, T. M., Scott, L. S., Shuffrey, L. C., Antúnez, M., Boylan, M. R., … Yoder, L. (2024). The development and structure of the Healthy Brain and Child Development (HBCD) study EEG Protocol. <em>Developmental Cognitive Neuroscience</em>, 69, 101447. <a href="https://doi.org/10.1016/j.dcn.2024.101447" target="_blank">https://doi.org/10.1016/j.dcn.2024.101447</a></p>
    <p>Jensen, S. K. G., Kumar, S., Xie, W., Tofail, F., Haque, R., Petri, W. A., & Nelson, C. A. (2019). Neural correlates of early adversity among Bangladeshi infants. <em>Scientific Reports</em>, 9(1), 3507. <a href="https://doi.org/10.1038/s41598-019-39242-x" target="_blank">https://doi.org/10.1038/s41598-019-39242-x</a></p>
    <p>Lippé, S., Kovacevic, N., & McIntosh, A. R. (2009). Differential Maturation of Brain Signal Complexity in the Human Auditory and Visual System. <em>Frontiers in Human Neuroscience</em>, 3, 48. <a href="https://doi.org/10.3389/neuro.09.048.2009" target="_blank">https://doi.org/10.3389/neuro.09.048.2009</a></p>
    <p>Margolis, E. T., Davel, L., Bourke, N. J., Bosco, C., Zieff, M. R., Monachino, A. D., Mazubane, T., Williams, S. R., Miles, M., & Jacobs, C. A. (2024). Longitudinal effects of prenatal alcohol exposure on visual neurodevelopment over infancy. <em>Developmental Psychology</em>. <a href="https://psycnet.apa.org/record/2024-66755-001" target="_blank">https://psycnet.apa.org/record/2024-66755-001</a></p>
    <p>Nazhvani, A. D., Boostani, R., Afrasiabi, S., & Sadatnezhad, K. (2013). Classification of ADHD and BMD patients using visual evoked potential. <em>Clinical Neurology and Neurosurgery</em>, 115(11), 2329–2335. <a href="https://doi.org/10.1016/j.clineuro.2013.08.009" target="_blank">https://doi.org/10.1016/j.clineuro.2013.08.009</a></p>
    <p>Shandiz, J. H., Heyrani, M., Sobhani-Rad, D., Salehinejad, Z., Shojaei, S., Khoshsima, M. J., Azimi, A., Yekta, A. A., & Yazdi, S. H. H. (2017). Pattern Visual Evoked Potentials in Dyslexic Children. <em>Journal of Ophthalmic & Vision Research</em>, 12(4), 402–406. <a href="https://doi.org/10.4103/jovr.jovr_106_16" target="_blank">https://doi.org/10.4103/jovr.jovr_106_16</a></p>    
  </ul>  
</details>




