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

import com.emporio.intime.daos.PaisesDAO;
import com.emporio.intime.entidades.Paises;

@Path("/paises")
public class PaisesResource {
	
	@Inject
	private PaisesDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Paises> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Paises findById(@PathParam("id") Integer idPais) {
		return dao.findById(idPais);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Paises atualizar(Paises pais) {
		return dao.atualizar(pais);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idPais) {
		dao.deletar(idPais);
		return Response.ok().status(Status.OK).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Paises pais) {
		dao.salvar(pais);
		return Response.ok(pais).status(Status.CREATED).build();
	}


}
