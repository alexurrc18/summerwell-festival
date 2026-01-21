package me.alexandruc.summerwell.core.artist;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {

    List<Artist> findAllByDayNumber(Integer dayNumber);
    
    List<Artist> findAllByStageId(Long stageId);

    
} 
