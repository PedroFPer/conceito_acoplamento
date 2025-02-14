package org.pedro.injecao_depen;


public class PeixeInjecDepe extends AnimalInjecDepe {
    private ComportNadarInjecDepe nadarInjecDepe;

    public PeixeInjecDepe(String nome, ComportNadarInjecDepe nadarInjecDepe) {
        super(nome);
        this.nadarInjecDepe = nadarInjecDepe;

    }

    public void nadar(){
        nadarInjecDepe.nadando();
    }
}

