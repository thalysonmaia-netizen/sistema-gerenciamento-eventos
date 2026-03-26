public class Main {
    public static void main(String[] args) {

        GerenciadorEventos gerenciador = new GerenciadorEventos();

        gerenciador.cadastrarEvento("Show", "10/04/2026", "Praça", "Show ao vivo");
        gerenciador.cadastrarEvento("Feira", "15/04/2026", "Centro", "Feira local");

        for (Evento e : gerenciador.listarEventos()) {
            System.out.println(e);
        }
    }
}