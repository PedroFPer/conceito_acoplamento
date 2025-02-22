package org.pedro.composicao;

public class CachorroComp extends AnimalComp {
    private ComportAndarComp andar;

    public CachorroComp(String nome) {
        super(nome);

         andar = new ComportAndarComp();
    }

    public void andar() {
        this.andar.andar();
    }

}
