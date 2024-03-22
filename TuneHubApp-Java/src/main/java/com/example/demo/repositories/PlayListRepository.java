package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.PlayList;
import com.example.demo.entities.Songs;

public interface PlayListRepository extends JpaRepository<PlayList, Integer>
{
	public PlayList findByName(String name);
}
