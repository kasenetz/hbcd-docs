# Magnetic Resonance Spectroscopy (MRS)
*See [Overview](overview.md) for details on quality control and [MRI Protocols](../../mriprotocols/overview.md) for information on sequence installation.*

Magnetic Resonance Spectroscopy (MRS) provides measures of molecules involved in neuronal metabolism, neurotransmission, and oxidative stress. These measures enable researchers to interrogate biochemical mechanisms underlying the structural, functional, and behavioral trajectories. HBCD is the first study of this magnitude to include MRS in a comprehensive pediatric neuroimaging protocol through the development of Integrated Short-TE and Hadamard Multi-Sequence, or ISTHMUS (Hui et al., 2024).


The MRS acquisition protocol, centered on a singlevoxel Point-RESolved Spectroscopy (PRESS) (Bottomley, 1987) localization (30×23×23 mm 3) in the bilateral thalamus (Fig. 7), was optimized to maximize signal-to-noise across multiple low-concentration metabolites while maintaining an acquisition time (TA) under 9 minutes. An advanced Hadamard encoded spectral editing scheme (Oeltzschner et al., 2019) was used to generate reliable and reproducible measures of the low-concentration metabolites. The primary metabolites measured for HBCD include: 

- **N-acetylaspartate (NAA)**: a marker of neuronal mitochondrial metabolism
- **Glutamate** and **γ-aminobutyric acid (GABA)**: the principal excitatory and inhibitory neurotransmitters
- **Glutathione (GSH)**: the most abundant antioxidant involved in protection against reactive oxygen species in the human brain

Additional metabolites measured include NAA, lactate, ascorbate, creatine, myo-inositol, glutamine, and total choline (Oeltzschner et al., 2019).

One barrier to the incorporation of MRS into human connectome studies is technical barriers to properly controlling for scanner drift. Because MRS relies on the frequency of the measured signals, uncorrected frequency drift during data acquisition is very detrimental to data quality, as it changes the contribution of coedited signals as well as editing efficiency (Harris et al., 2014). To mitigate drift, an innovative approach was taken to incorporate interleaved water referencing (Edden et al., 2016) for real-time frequency correction.

The protocol was further optimized for robust measurement in pediatric populations. For instance, to reduce the impact of participant motion, a short block of 32 transients (TE = 35 ms) without spectral editing was acquired ahead of the main spectral editing block (224 transients, TE = 80 ms). This mitigated the effects of T2 relaxation on metabolite concentration measures (Traber et al., 2004), ensuring sufficient measures of high-concentration metabolites even if infants awoke in the middle of acquisition.


<details class="collapsible references">
  <summary class="references">References</summary>
TO DO
</details>
  

