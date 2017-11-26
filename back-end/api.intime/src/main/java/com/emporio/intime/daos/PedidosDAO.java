package com.emporio.intime.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.emporio.intime.entidades.Pedidos;

@Stateless
public class PedidosDAO {
	
	@PersistenceContext(unitName = "intimeDS")
	private EntityManager manager;
	
	public List<Pedidos> getAll() {
		return manager.createQuery("select p from Pedidos p", Pedidos.class).getResultList();
	}

	public Pedidos salvar(Pedidos pedido) {
		manager.persist(pedido);
		return pedido;
	}

	public Pedidos atualizar(Pedidos pedido) {
		manager.merge(pedido);
		return pedido;
	}

	public void deletar(Integer idPedido) {
		Pedidos pedido = manager.find(Pedidos.class, idPedido);

		if (pedido != null) {
			manager.remove(pedido);
		}
	}

	public Pedidos findById(Integer idPedido) {
		return manager.find(Pedidos.class, idPedido);
	}
	
	public List<Pedidos> buscarPorPropriedade(String whereClause, Object parametro) {
		return manager.createQuery("select p from Pedidos p " + whereClause + parametro, Pedidos.class)
		        .getResultList();
	}

}
