package org.pedro.injecao_depen;


public class CachorroInjecDepe extends AnimalInjecDepe {
    private ComportAndarInjecDepe andarInjecDepe;

    public CachorroInjecDepe(String nome, ComportAndarInjecDepe andarInjecDepe) {
        super(nome);
        this.andarInjecDepe = andarInjecDepe  ;
    }

    public void andarInjecDepe() {
        andarInjecDepe.andando();
    }

}
