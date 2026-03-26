import java.util.ArrayList;
import java.util.List;

public class GerenciadorEventos {

    private List<Evento> eventos = new ArrayList<>();
    private int contadorId = 1;

    public void cadastrarEvento(String nome, String data, String local, String descricao) {
        Evento evento = new Evento(contadorId++, nome, data, local, descricao);
        eventos.add(evento);
    }

    public List<Evento> listarEventos() {
        return eventos;
    }

    public Evento buscarPorId(int id) {
        for (Evento e : eventos) {
            if (e.getId() == id) {
                return e;
            }
        }
        return null;
    }

    public boolean atualizarEvento(int id, String nome, String data, String local, String descricao) {
        Evento e = buscarPorId(id);
        if (e != null) {
            e.setNome(nome);
            e.setData(data);
            e.setLocal(local);
            e.setDescricao(descricao);
            return true;
        }
        return false;
    }

    public boolean removerEvento(int id) {
        Evento e = buscarPorId(id);
        if (e != null) {
            eventos.remove(e);
            return true;
        }
        return false;
    }
}