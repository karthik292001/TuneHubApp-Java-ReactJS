package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.PlayList;

public interface PlayListService 
{

	public boolean addPlaylist(PlayList playlist);

	public List<PlayList> fetchPlaylists();

	public boolean getPlaylist(String name);
	
	

}
