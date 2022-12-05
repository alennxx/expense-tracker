package com.natgx.expensetrackerback.expenses.expense;

import com.natgx.expensetrackerback.expenses.category.ExpenseCategory;
import com.natgx.expensetrackerback.expenses.expense.dto.ExpenseDto;
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

    @ManyToOne(cascade = { CascadeType.MERGE })
    ExpenseCategory category;

    ExpenseDto dto() {
        return new ExpenseDto(id, name, amount, category.dto());
    }
}
