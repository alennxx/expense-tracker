package com.natgx.expensetrackerback.expense;

import com.natgx.expensetrackerback.expense.category.ExpenseCategory;
import com.natgx.expensetrackerback.expense.dto.ExpenseDto;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;
    BigDecimal amount;

    @ManyToOne(cascade = { CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH })
    ExpenseCategory category;

    ExpenseDto dto() {
        return new ExpenseDto(name, amount, category.dto());
    }
}
