package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.emporio.intime.entidades.TiposServicos;


@Stateless
public class TiposServicosDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;
	
	public List<TiposServicos> getAll() {
		return manager.createQuery("select tp from TiposServicos tp", TiposServicos.class).getResultList();
	}

	public TiposServicos salvar(TiposServicos tipoServico) {
		manager.persist(tipoServico);
		return tipoServico;
	}

	public TiposServicos atualizar(TiposServicos tipoServico) {
		manager.merge(tipoServico);
		return tipoServico;
	}

	public void deletar(Integer idTipoServico) {
		TiposServicos tipoServico = manager.find(TiposServicos.class, idTipoServico);

		if (tipoServico != null) {
			manager.remove(tipoServico);
		}
	}

	public TiposServicos findById(Integer idTipoServico) {
		return manager.find(TiposServicos.class, idTipoServico);
	}

}
