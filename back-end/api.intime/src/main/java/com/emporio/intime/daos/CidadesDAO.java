package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.emporio.intime.entidades.Cidades;

@Stateless
public class CidadesDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;

	public List<Cidades> getAll() {
		return manager.createQuery("select c from Cidades c", Cidades.class).getResultList();
	}
	
	public List<Cidades> getCidadesPorEstado(Integer idEstado){
		return manager.createQuery("select c from Cidades c where c.idEstado = " + idEstado, Cidades.class).getResultList();
	}

	public Cidades salvar(Cidades cidade) {
		manager.persist(cidade);
		return cidade;
	}

	public Cidades atualizar(Cidades cidade) {
		manager.merge(cidade);
		return cidade;
	}

	public void deletar(Integer idCidade) {
		Cidades cidade = manager.find(Cidades.class, idCidade);

		if (cidade != null) {
			manager.remove(cidade);
		}
	}

	public Cidades findById(Integer idCidade) {
		return manager.find(Cidades.class, idCidade);
	}

}
