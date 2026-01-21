package me.alexandruc.summerwell.core.ticket_type;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketTypeRepository extends JpaRepository<TicketType, Long> {

    List<TicketType> findAllByYear(Integer year);
    List<TicketType> findAllByType(String type);
    
}
