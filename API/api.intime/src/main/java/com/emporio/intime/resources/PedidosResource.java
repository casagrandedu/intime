package com.emporio.intime.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.emporio.intime.daos.PedidosDAO;
import com.emporio.intime.entidades.Pedidos;

@Path("/pedidos")
public class PedidosResource {
	
	@Inject
	private PedidosDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Pedidos> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Pedidos findById(@PathParam("id") Integer idPedido) {
		return dao.findById(idPedido);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Pedidos atualizar(Pedidos pedido) {
		return dao.atualizar(pedido);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idPedido) {
		dao.deletar(idPedido);
		return Response.ok().status(Status.OK).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Pedidos pedido) {
		dao.salvar(pedido);
		return Response.ok(pedido).status(Status.CREATED).build();
	}

}
